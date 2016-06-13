import Model        from 'ampersand-model';
import Helpers      from '../helpers';

var season = Model.extend({

    initialize () {

        this.on('change:currentSeason', this.updateSeasonData);
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
        firebase.database().ref(_this.currentSeason).once('value').then(function (snapshot) {
            var seasonDataPulled = snapshot.val();

            _this.currentSeason         =  globalApp.defaultSeason;
            _this.currentClub           = seasonDataPulled.club;
            _this.currentClubCss        =  seasonDataPulled.club.replace(' ', '-').toLowerCase();
            _this.mainImage             = seasonDataPulled.mainImage;
            _this.currentSeasonYear     =  seasonDataPulled.year;
            _this.matchesData           =  seasonDataPulled.matches;
            _this.currentClubColors     =  Helpers.getClubColors(seasonDataPulled.club);
        });
    }
});

export default season;