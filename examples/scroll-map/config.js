var config = {
    style: 'mapbox://styles/kripka-iowa/cms6finca006801s6dowihsx9',
    accessToken: 'pk.eyJ1Ijoia3JpcGthLWlvd2EiLCJhIjoiY21zM3hrNTU0MXgzYTJ5cHR4bjh2amR2NSJ9.3WO3322D_b0WNdw4H1Byfg',
     showMarkers: false,
    theme: 'light',
    title: 'Dangers of Neotropical Migrants',
    subtitle: 'Birds face obstacles as they migrate from Central and South America to breed in the United States and Canada',
    footer: 'Sources and image credits go here.',
    use3dTerrain: true,
    chapters: [
        {
        id: 'earth',
        alignment: 'left',
        title: 'Neotropical Migrants',
        description: 'Neotropical migrants are birds that breed in the United States and Canada during the summer and migrate to the Neotropics (Mexico, Central America, South America, and the Caribbean) for the winter. This large group includes warblers, tanagers, and orioles. Roughly 340 to 360 species fall into this category, making up about half of all bird species that breed in North America.<br /><b>Let\'s look at a hypothetical species.</b>',
        image:'https://kevinripka-uiowa.github.io/interactive-storytelling/examples/scroll-map/img/birds.png',
        location: {
            center: [-80.5, 20],
            zoom: 2,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'breeding-range', opacity: 0 },
            { layer: 'winter-range', opacity: 0 },
            { layer: 'migration-route', opacity: 0 }
        ]
        },
        {
        id: 'breeding-range',
        alignment: 'right',
        title: 'Breeding Range',
        description: 'During the summer, our hypothetical neotropical migrant breeds across eastern Canada, where long days and abundant insects provide the food needed to raise young.',
        location: {
            center: [-70, 49.88223],
            zoom: 3,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'breeding-range', opacity: 0.6, duration: 800 }
        ]
        },
        {
        id: 'winter-range',
        alignment: 'left',
        title: 'Winter Range',
        description: 'When the breeding season ends, the bird returns to its winter range in southern Central America and northern South America, where warmer conditions provide food throughout the colder months.',
        location: {
            center: [-74.87590, 8.69840],
            zoom: 3,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'breeding-range', opacity: 0 },
            { layer: 'winter-range', opacity: 0.6, duration: 800 }
        ]
        },
        {
        id: 'migration',
        alignment: 'left',
        title: 'Migration Routes',
        description: 'Neotropical migrants generally travel north through one of three broad pathways: over land through Mexico, across the Gulf of Mexico, or along the Caribbean islands. Our hypothetical bird follows the trans-Gulf route.',
        location: {
            center: [-90.94332, 16.37613],
            zoom: 3,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'winter-range', opacity: 0 },
            { layer: 'migration-route', opacity: 0.9, duration: 800 }
        ]
        },
        {
    id: 'gulf-crossing',
    alignment: 'right',
    title: 'Yucatan Peninsula',
    description: 'Before attempting the Gulf crossing, the bird stops on the Yucatán Peninsula to rest and feed. The energy stored here may have to sustain it through hundreds of miles of flight over open water.',
    location: {
        center: [-89.18087, 24.08749],
        zoom: 6.84,
        pitch: 79.50,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        { layer: 'migration-route', opacity: 0 }
    ],
    onChapterExit: []
    },
    {
    id: 'gulf',
    alignment: 'left',
    title: 'Across the Gulf',
    description: 'The bird leaves the Yucatán and begins a nonstop flight across the Gulf of Mexico. With nowhere to land, it must continue until it reaches the northern Gulf Coast, making weather and wind conditions especially important.',
    location: {
        center: [-84.59217, 31.83162],
        zoom: 6.84,
        pitch: 70,
        bearing: 0,
        speed: 0.25
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false
    },
    {
        id: 'atlanta',
        alignment: 'right',
        title: 'Buildings',
        description: 'After reaching land, the bird encounters a different kind of danger. Glass, artificial light, and dense groups of buildings can confuse migrating birds and lead to fatal collisions, especially during nighttime migration.',
        rotateAnimation: true,
        location: {
            center: [-84.38977916429899,33.757302321064735],
            zoom: 17,
            pitch: 80,
            bearing: 0,
            curve: 1
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'migration-route', opacity: 0.25 },
        ],
        onChapterExit: []
        },
    {
        id: 'mountain-terrain',
        alignment: 'left',
        title: 'Mountains',
        description: 'Farther north, the bird must cross mountainous terrain. Cold temperatures, storms, and limited food can slow migration and force birds to spend more time searching for safe places to rest and refuel.',
        location: {
            center: [-82.26510, 35.76484],
            zoom: 14.83,
            pitch: 79.47,
            bearing: 0,
            duration: 5000
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [

        ],
        onChapterExit: []
        },
        {
        id: 'breeding-range2',
        alignment: 'right',
        title: 'Breeding Range',
        description: 'After surviving the journey, the bird reaches its breeding range in eastern Canada. It will spend the summer establishing territory, finding a mate, and raising young before migration begins again.',
        location: {
            center: [-70, 49.88223],
            zoom: 5,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'breeding-range', opacity: 0.6, duration: 800 }
        ]
        },
        {
        id: 'breeding-range3',
        alignment: 'right',
        title: 'Fall Migration',
        description: 'As summer ends, the bird turns south and retraces the long journey toward its winter range. The return trip brings many of the same hazards, meaning this migration cycle must be survived twice each year.',
        location: {
            center: [-70, 20],
            zoom: 3,
            pitch: 0,
            bearing: 180
        },
        mapAnimation: 'flyTo',
        onChapterEnter: [
            { layer: 'breeding-range', opacity: 0, duration: 800 },
            { layer: 'winter-range', opacity: 0.6, duration: 800 }
        ]
        }
    ]
};
