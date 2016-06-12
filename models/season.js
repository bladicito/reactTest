import Model from 'ampersand-model';

var season = Model.extend({

    initialize () {

    },
    
    props: {
        currentSeason       : 'string',
        currentClub         : 'string',
        currentClubCss      : 'string',
        mainImage           : 'string',
        currentSeasonYear   : 'string',
        matchesData         : 'object',
        currentClubColors   : 'object'
    }
});

export default season;