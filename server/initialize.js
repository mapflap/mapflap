export default async (models) => {

    const listaWork = [
        {
            codeWork: 1,
            name: "Accuracy assessment of world population raster data",
            shortName: "Accuracy assessment",
            image: "/geospatial/miniature_work_1.png",
            description: "A WebGIS presenting an analysis that tests the accuracy of two publicly available world population data maps; the GHSL and the WorldPop layer against high resolution satellite imagery over an arbitrary study area with an additional intercomparison of the two. (NOTE: it may take a while to load)",
            category: 1,
            url: "http://mapflap.herokuapp.com/summary",
            finished: 1
        },
        {
            codeWork: 2,
            name: "NDVI computation from satellite imagery",
            shortName: "NDVI computation",
            image: "/geospatial/miniature_work_2.png",
            description: "A little step into the remote sensing world through the computation of the NDVI (Normalized Difference Vegetatio Index) based on Sentinel-2 satellite data. The aim of this index is to assess whether or not the target being observed contains live green vegetation.  (NOTE: it may take a while to load)",
            category: 1,
            url: "http://mapflap.herokuapp.com/summary_work_2_geo",
            finished: 1
        },
        {
            codeWork: 3,
            name: "NDBI and ML classification",
            shortName: "NDBI and ML",
            image: "/geospatial/miniature_work_3.png",
            description: "Computation of the NDBI (Normalized Difference Built-up Index) based on Sentinel-2 satellite data and comparison of the thematic map, extracted starting from the results of this index, with the one created through the application of a Machine Learning classification algorithm: k-NN.",
            category: 1,
            url: "",
            finished: 0
        },
        {
            codeWork: 4,
            name: "Locus: Website for an art town - Bergamo",
            shortName: "Bergamo's WebApp",
            image: "/just_because/Bergamo.jpg",
            description: "The aim of this project is to provide an immersive and wonderful experience in visiting one of the most beautiful city of northern Italy: Bergamo. The history of Bergamo is full of art, nature and adventures and the vision of that project is to spread it all over the word making it accesible with an intercative website!",
            category: 3,
            url: "https://locusbergamo.github.io/",
            finished: 1
        },

    ]
    await models.Work.bulkCreate(listaWork)

    const listaCategory = [
        {
            category: 1,
            name: "Geospatial",
        },
        {
            category: 2,
            name: "Machine Learning",
        },
        {
            category: 3,
            name: "Just Because",
        },
    ]
    await models.Category.bulkCreate(listaCategory)

    const listaTechnology = [
        {
            codeTech: 1,
            name: "QGIS",
            image: "/technologies/qgis.png",
        },
        {
            codeTech: 2,
            name: "Geoserver",
            image: "/technologies/geoserver.png",
        },
        {
            codeTech: 3,
            name: "OpenLayers",
            image: "/technologies/openlayers.png",
        },
        {
            codeTech: 4,
            name: "Javascript",
            image: "/technologies/javascript.png",
        },
        {
            codeTech: 5,
            name: "SK Learn",
            image: "/technologies/scikit_learn.png",
        },
        {
            codeTech: 6,
            name: "mapillary",
            image: "/technologies/mapillary.png",
        },
        {
            codeTech: 7,
            name: "nodejs",
            image: "/technologies/nodejs.png",
        },
        {
            codeTech: 8,
            name: "Nuxt",
            image: "/technologies/nuxt.png",
        },
        {
            codeTech: 9,
            name: "Openstreetmap",
            image: "/technologies/openstreetmap.png",
        },
        {
            codeTech: 10,
            name: "Postgresql",
            image: "/technologies/postgresql.png",
        },
    ]
    await models.Technology.bulkCreate(listaTechnology)

    const listaWorkTechnology = [
        {
            codeWork: 1,
            codeTech: 1, 
        },
        {
            codeWork: 1,
            codeTech: 2, 
        },
        {
            codeWork: 1,
            codeTech: 3, 
        },
        {
            codeWork: 1,
            codeTech: 4, 
        },
        {
            codeWork: 2,
            codeTech: 1, 
        },
        {
            codeWork: 2,
            codeTech: 2, 
        },
        {
            codeWork: 2,
            codeTech: 3, 
        },
        {
            codeWork: 2,
            codeTech: 4, 
        },
        {
            codeWork: 3,
            codeTech: 1, 
        },
        {
            codeWork: 3,
            codeTech: 2, 
        },
        {
            codeWork: 3,
            codeTech: 3, 
        },
        {
            codeWork: 3,
            codeTech: 4, 
        },
        {
            codeWork: 3,
            codeTech: 5, 
        },
        {
            codeWork: 4,
            codeTech: 6, 
        },
        {
            codeWork: 4,
            codeTech: 7, 
        },
        {
            codeWork: 4,
            codeTech: 8, 
        },
        {
            codeWork: 4,
            codeTech: 9, 
        },
        {
            codeWork: 4,
            codeTech: 10, 
        },
    ]
    await models.WorkTechnology.bulkCreate(listaWorkTechnology)

}
