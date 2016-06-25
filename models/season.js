import Model        from 'ampersand-model';
import Helpers      from '../helpers';
import globalApp    from 'ampersand-app';

var season = Model.extend({

    initialize () {
        this.on('change:currentSeason', this.updateSeasonData);
    },

    parse : function(attributes){

    },

    props: {
        currentSeason       : 'string',
        currentClub         : 'string',
        currentClubCss      : 'string',
        mainImage           : 'string',
        currentSeasonYear   : 'string',
        matchesData         : 'object',
        currentClubColors   : 'object'
    },

    updateSeasonData() {

        var _this = this;

        console.log('----------------- Update Season Data-----------------------');
        console.log('-----------------------------------------------------------');
        console.log('current season:' + this.currentSeason);
        console.log('***********************************************************');

        firebase.database().ref(_this.currentSeason).once('value').then(function (snapshot) {
            var seasonDataPulled = snapshot.val();

        console.log('data pulled from firebase');
        console.log('-----------------------------------------------------------');
        console.log(seasonDataPulled);
        console.log('-----------------------------------------------------------');

            _this.currentClub       =   seasonDataPulled.club;
            _this.currentClubCss    =   seasonDataPulled.club.replace(' ', '-').toLowerCase();
            _this.mainImage         =   seasonDataPulled.mainImage;
            _this.currentSeasonYear =   seasonDataPulled.year;
            _this.matchesData       =   seasonDataPulled.matches;
            _this.currentClubColors =   Helpers.getClubColors(seasonDataPulled.club);
            
        });


    }
});

export default season;