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
            description: "A little step into the remote sensing world through the computation of the NDVI (Normalized Difference Vegetation Index) based on Sentinel-2 satellite data. The aim of this index is to assess whether or not the target being observed contains live green vegetation.  (NOTE: it may take a while to load)",
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
        {
            codeWork: 5,
            name: "CNN for postprocessing of IVT images",
            shortName: "CNN-IVT",
            image: "/machine_learning/cnn_ivt.png",
            description: "Re-implementation of the notebook referred to the 2019 paper by Chapman et al. The purpose is to build a ConvNet able to postprocess the IVT (Integrated Vapor Transport) images derived from NWP models given a set of ground truth IVT values derived from measurement.",
            category: 2,
            url: "https://github.com/FBosso/CNN_IVT",
            finished: 1
        },
        {
            codeWork: 6,
            name: "Drought forecasting: ML & climate indices",
            shortName: "ML4Drought",
            image: "/hidden/NIPA.webp",
            description: "Slides of my presentation of 03-11-2022 at IHE Delft. Droughts are natural extreme events related to the reduction of water resources availability. Challenges in predicting droughts still remain, especially for sub-seasonal lead-times. In this work, we aim to combine a statistical framework and a Machine Learning (ML) model to detect the links between large-scale climate variables and local precipitation, and exploit them to predict monthly cumulative precipitation with a Neural Network.",
            category: 2,
            url: "/hidden/Bosso_Francesco_presentation.pdf",
            finished: 1
        },
        {
            codeWork: 7,
            name: "Drought forecasting: ML & climate indices",
            shortName: "ML4Drought",
            image: "/hidden/pearson_image_borders.webp",
            description: "Slides of my presentation of 08-12-2022 at IHE Delft. Droughts are natural extreme events related to the reduction of water resources availability. Challenges in predicting droughts still remain, especially for sub-seasonal lead-times. In this work, we aim to combine a statistical framework and a Machine Learning (ML) model to detect the links between large-scale climate variables and local precipitation, and exploit them to predict monthly cumulative precipitation with a Neural Network.",
            category: 2,
            url: "/hidden/Bosso_Francesco_presentation_08-12-2022.pdf",
            finished: 1
        },
        {
            codeWork: 8,
            name: "ML-based improvement of sub-seasonal drought forecasting",
            shortName: "ELM-NN-CNN",
            image: "/hidden/EGU23.jpg",
            description: "This is the official abstract of the research work that I will present at EGU General Assembly	 2023. The research examines the forecasting and management of droughts, one of the most severe natural disasters that afflict societies.",
            category: 2,
            url: "https://meetingorganizer.copernicus.org/EGU23/EGU23-6685.html",
            finished: 1
        },
        {
            codeWork: 9,
            name: "Niño Index Phase Analysis (NIPA) readaptation",
            shortName: "NewNIPA",
            image: "/geospatial/miniature_work_4.jpg",
            description: "Readaptation of the Niño Index Phase Analysis (NIPA) module initially developed by Zimmerman et al. (2016) and then readapted by Giuliani et al. (2019). The present version has been modified to work also for subseasonal lead-times. NIPA is a framework that searches for links between Global and Local variables exploiting the phases of climate indices",
            category: 1,
            url: "https://github.com/FBosso/newNIPA",
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
        {
            codeTech: 11,
            name: "Matplotlib",
            image: "/technologies/matplotlib.png",
        },
        {
            codeTech: 12,
            name: "Pandas",
            image: "/technologies/pandas.png",
        },
        {
            codeTech: 13,
            name: "Tensorflow",
            image: "/technologies/tensorflow.png",
        },
        {
            codeTech: 14,
            name: "Xarray",
            image: "/technologies/xarray.png",
        },
        {
            codeTech: 15,
            name: "Bokeh",
            image: "/technologies/bokeh.png",
        },
        {
            codeTech: 16,
            name: "Numpy",
            image: "/technologies/numpy.png",
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
        {
            codeWork: 5,
            codeTech: 11, 
        },
        {
            codeWork: 5,
            codeTech: 12, 
        },
        {
            codeWork: 5,
            codeTech: 13, 
        },
        {
            codeWork: 5,
            codeTech: 14, 
        },
        {
            codeWork: 6,
            codeTech: 11, 
        },
        {
            codeWork: 6,
            codeTech: 12, 
        },
        {
            codeWork: 6,
            codeTech: 13, 
        },
        {
            codeWork: 6,
            codeTech: 14, 
        },
        {
            codeWork: 6,
            codeTech: 15, 
        },
        {
            codeWork: 7,
            codeTech: 11, 
        },
        {
            codeWork: 7,
            codeTech: 12, 
        },
        {
            codeWork: 7,
            codeTech: 13, 
        },
        {
            codeWork: 7,
            codeTech: 14, 
        },
        {
            codeWork: 7,
            codeTech: 5, 
        },
        {
            codeWork: 7,
            codeTech: 15, 
        },
        {
            codeWork: 8,
            codeTech: 12, 
        },
        {
            codeWork: 8,
            codeTech: 13, 
        },
        {
            codeWork: 8,
            codeTech: 14, 
        },
        {
            codeWork: 8,
            codeTech: 5, 
        },

        {
            codeWork: 9,
            codeTech: 12, 
        },
        {
            codeWork: 9,
            codeTech: 11, 
        },
        {
            codeWork: 9,
            codeTech: 14, 
        },
        {
            codeWork: 9,
            codeTech: 16, 
        },
        
    ]
    await models.WorkTechnology.bulkCreate(listaWorkTechnology)

}
