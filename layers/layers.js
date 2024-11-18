ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.269355, -7.586946, 109.291273, -7.571937]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Nama_2 = new ol.format.GeoJSON();
var features_Nama_2 = format_Nama_2.readFeatures(json_Nama_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Nama_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_2.addFeatures(features_Nama_2);
var lyr_Nama_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_2, 
                style: style_Nama_2,
                popuplayertitle: "Nama",
                interactive: true,
    title: 'Nama<br />\
    <img src="styles/legend/Nama_2_0.png" /> RT  03 RW 02<br />\
    <img src="styles/legend/Nama_2_1.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/Nama_2_2.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/Nama_2_3.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/Nama_2_4.png" /> RT 01 RW 04<br />\
    <img src="styles/legend/Nama_2_5.png" /> RT 01 RW 05<br />\
    <img src="styles/legend/Nama_2_6.png" /> RT 01 RW 06<br />\
    <img src="styles/legend/Nama_2_7.png" /> RT 01 RW 07<br />\
    <img src="styles/legend/Nama_2_8.png" /> RT 01 RW 08<br />\
    <img src="styles/legend/Nama_2_9.png" /> RT 01 RW 09<br />\
    <img src="styles/legend/Nama_2_10.png" /> RT 01 RW 10<br />\
    <img src="styles/legend/Nama_2_11.png" /> RT 01 RW 11<br />\
    <img src="styles/legend/Nama_2_12.png" /> RT 01 RW 12<br />\
    <img src="styles/legend/Nama_2_13.png" /> RT 01 RW 13<br />\
    <img src="styles/legend/Nama_2_14.png" /> RT 01 RW 14<br />\
    <img src="styles/legend/Nama_2_15.png" /> RT 01 RW 15<br />\
    <img src="styles/legend/Nama_2_16.png" /> RT 02  RW 02<br />\
    <img src="styles/legend/Nama_2_17.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/Nama_2_18.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/Nama_2_19.png" /> RT 02 RW 04<br />\
    <img src="styles/legend/Nama_2_20.png" /> RT 02 RW 05<br />\
    <img src="styles/legend/Nama_2_21.png" /> RT 02 RW 06<br />\
    <img src="styles/legend/Nama_2_22.png" /> RT 02 RW 07<br />\
    <img src="styles/legend/Nama_2_23.png" /> RT 02 RW 08<br />\
    <img src="styles/legend/Nama_2_24.png" /> RT 02 RW 09<br />\
    <img src="styles/legend/Nama_2_25.png" /> RT 02 RW 10<br />\
    <img src="styles/legend/Nama_2_26.png" /> RT 02 RW 11<br />\
    <img src="styles/legend/Nama_2_27.png" /> RT 02 RW 12<br />\
    <img src="styles/legend/Nama_2_28.png" /> RT 02 RW 13<br />\
    <img src="styles/legend/Nama_2_29.png" /> RT 02 RW 14<br />\
    <img src="styles/legend/Nama_2_30.png" /> RT 02 RW 15<br />\
    <img src="styles/legend/Nama_2_31.png" /> RT 03  RW 02<br />\
    <img src="styles/legend/Nama_2_32.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/Nama_2_33.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/Nama_2_34.png" /> RT 03 RW 05<br />\
    <img src="styles/legend/Nama_2_35.png" /> RT 03 RW 06<br />\
    <img src="styles/legend/Nama_2_36.png" /> RT 03 RW 08<br />\
    <img src="styles/legend/Nama_2_37.png" /> RT 03 RW 10<br />\
    <img src="styles/legend/Nama_2_38.png" /> RT 03 RW 12<br />\
    <img src="styles/legend/Nama_2_39.png" /> RT 04  RW 02<br />\
    <img src="styles/legend/Nama_2_40.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/Nama_2_41.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/Nama_2_42.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/Nama_2_43.png" /> RT 04 RW 11<br />\
    <img src="styles/legend/Nama_2_44.png" /> RT 04 RW 12<br />\
    <img src="styles/legend/Nama_2_45.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/Nama_2_46.png" /> RT 05 RW 12<br />\
    <img src="styles/legend/Nama_2_47.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/Nama_2_48.png" /> RT 06 RW 03<br />\
    <img src="styles/legend/Nama_2_49.png" /> <br />'
        });
var format_Sawah_3 = new ol.format.GeoJSON();
var features_Sawah_3 = format_Sawah_3.readFeatures(json_Sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_3.addFeatures(features_Sawah_3);
var lyr_Sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_3, 
                style: style_Sawah_3,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_3.png" /> Sawah'
            });
var format_Perkebunan_4 = new ol.format.GeoJSON();
var features_Perkebunan_4 = format_Perkebunan_4.readFeatures(json_Perkebunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Perkebunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perkebunan_4.addFeatures(features_Perkebunan_4);
var lyr_Perkebunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perkebunan_4, 
                style: style_Perkebunan_4,
                popuplayertitle: "Perkebunan",
                interactive: true,
                title: '<img src="styles/legend/Perkebunan_4.png" /> Perkebunan'
            });
var format_Desa_Pageralang_poly_5 = new ol.format.GeoJSON();
var features_Desa_Pageralang_poly_5 = format_Desa_Pageralang_poly_5.readFeatures(json_Desa_Pageralang_poly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Desa_Pageralang_poly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Pageralang_poly_5.addFeatures(features_Desa_Pageralang_poly_5);
var lyr_Desa_Pageralang_poly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Pageralang_poly_5, 
                style: style_Desa_Pageralang_poly_5,
                popuplayertitle: "Desa_Pageralang_poly",
                interactive: false,
                title: '<img src="styles/legend/Desa_Pageralang_poly_5.png" /> Desa_Pageralang_poly'
            });
var format_JalanDesa_6 = new ol.format.GeoJSON();
var features_JalanDesa_6 = format_JalanDesa_6.readFeatures(json_JalanDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalanDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_6.addFeatures(features_JalanDesa_6);
var lyr_JalanDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_6, 
                style: style_JalanDesa_6,
                popuplayertitle: "JalanDesa",
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_6.png" /> JalanDesa'
            });
var format_Masjid_7 = new ol.format.GeoJSON();
var features_Masjid_7 = format_Masjid_7.readFeatures(json_Masjid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Masjid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_7.addFeatures(features_Masjid_7);
var lyr_Masjid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_7, 
                style: style_Masjid_7,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_7.png" /> Masjid'
            });
var format_Warung_8 = new ol.format.GeoJSON();
var features_Warung_8 = format_Warung_8.readFeatures(json_Warung_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Warung_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_8.addFeatures(features_Warung_8);
var lyr_Warung_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_8, 
                style: style_Warung_8,
                popuplayertitle: "Warung",
                interactive: true,
                title: '<img src="styles/legend/Warung_8.png" /> Warung'
            });
var format_Warkop_9 = new ol.format.GeoJSON();
var features_Warkop_9 = format_Warkop_9.readFeatures(json_Warkop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Warkop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warkop_9.addFeatures(features_Warkop_9);
var lyr_Warkop_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warkop_9, 
                style: style_Warkop_9,
                popuplayertitle: "Warkop",
                interactive: true,
                title: '<img src="styles/legend/Warkop_9.png" /> Warkop'
            });
var format_Pemancingan_10 = new ol.format.GeoJSON();
var features_Pemancingan_10 = format_Pemancingan_10.readFeatures(json_Pemancingan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemancingan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemancingan_10.addFeatures(features_Pemancingan_10);
var lyr_Pemancingan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemancingan_10, 
                style: style_Pemancingan_10,
                popuplayertitle: "Pemancingan",
                interactive: true,
                title: '<img src="styles/legend/Pemancingan_10.png" /> Pemancingan'
            });
var format_KolamRenang_11 = new ol.format.GeoJSON();
var features_KolamRenang_11 = format_KolamRenang_11.readFeatures(json_KolamRenang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KolamRenang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KolamRenang_11.addFeatures(features_KolamRenang_11);
var lyr_KolamRenang_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KolamRenang_11, 
                style: style_KolamRenang_11,
                popuplayertitle: "Kolam Renang",
                interactive: true,
                title: '<img src="styles/legend/KolamRenang_11.png" /> Kolam Renang'
            });
var format_Apotek_12 = new ol.format.GeoJSON();
var features_Apotek_12 = format_Apotek_12.readFeatures(json_Apotek_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apotek_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apotek_12.addFeatures(features_Apotek_12);
var lyr_Apotek_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apotek_12, 
                style: style_Apotek_12,
                popuplayertitle: "Apotek",
                interactive: true,
                title: '<img src="styles/legend/Apotek_12.png" /> Apotek'
            });
var format_Balaidesa_13 = new ol.format.GeoJSON();
var features_Balaidesa_13 = format_Balaidesa_13.readFeatures(json_Balaidesa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Balaidesa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balaidesa_13.addFeatures(features_Balaidesa_13);
var lyr_Balaidesa_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balaidesa_13, 
                style: style_Balaidesa_13,
                popuplayertitle: "Balaidesa",
                interactive: true,
                title: '<img src="styles/legend/Balaidesa_13.png" /> Balaidesa'
            });
var format_Lapangan_14 = new ol.format.GeoJSON();
var features_Lapangan_14 = format_Lapangan_14.readFeatures(json_Lapangan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_14.addFeatures(features_Lapangan_14);
var lyr_Lapangan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_14, 
                style: style_Lapangan_14,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_14.png" /> Lapangan'
            });
var format_Curug_15 = new ol.format.GeoJSON();
var features_Curug_15 = format_Curug_15.readFeatures(json_Curug_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Curug_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curug_15.addFeatures(features_Curug_15);
var lyr_Curug_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curug_15, 
                style: style_Curug_15,
                popuplayertitle: "Curug",
                interactive: true,
                title: '<img src="styles/legend/Curug_15.png" /> Curug'
            });
var format_BengkelMobil_16 = new ol.format.GeoJSON();
var features_BengkelMobil_16 = format_BengkelMobil_16.readFeatures(json_BengkelMobil_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BengkelMobil_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BengkelMobil_16.addFeatures(features_BengkelMobil_16);
var lyr_BengkelMobil_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BengkelMobil_16, 
                style: style_BengkelMobil_16,
                popuplayertitle: "Bengkel Mobil",
                interactive: true,
                title: '<img src="styles/legend/BengkelMobil_16.png" /> Bengkel Mobil'
            });
var format_Cell_17 = new ol.format.GeoJSON();
var features_Cell_17 = format_Cell_17.readFeatures(json_Cell_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cell_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cell_17.addFeatures(features_Cell_17);
var lyr_Cell_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cell_17, 
                style: style_Cell_17,
                popuplayertitle: "Cell",
                interactive: true,
                title: '<img src="styles/legend/Cell_17.png" /> Cell'
            });
var format_Bengkel_18 = new ol.format.GeoJSON();
var features_Bengkel_18 = format_Bengkel_18.readFeatures(json_Bengkel_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bengkel_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_18.addFeatures(features_Bengkel_18);
var lyr_Bengkel_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_18, 
                style: style_Bengkel_18,
                popuplayertitle: "Bengkel",
                interactive: true,
                title: '<img src="styles/legend/Bengkel_18.png" /> Bengkel'
            });
var format_PomBensin_19 = new ol.format.GeoJSON();
var features_PomBensin_19 = format_PomBensin_19.readFeatures(json_PomBensin_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PomBensin_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PomBensin_19.addFeatures(features_PomBensin_19);
var lyr_PomBensin_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PomBensin_19, 
                style: style_PomBensin_19,
                popuplayertitle: "Pom Bensin",
                interactive: true,
                title: '<img src="styles/legend/PomBensin_19.png" /> Pom Bensin'
            });
var format_agen_20 = new ol.format.GeoJSON();
var features_agen_20 = format_agen_20.readFeatures(json_agen_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_agen_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agen_20.addFeatures(features_agen_20);
var lyr_agen_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agen_20, 
                style: style_agen_20,
                popuplayertitle: "agen",
                interactive: true,
                title: '<img src="styles/legend/agen_20.png" /> agen'
            });
var format_Rumah_21 = new ol.format.GeoJSON();
var features_Rumah_21 = format_Rumah_21.readFeatures(json_Rumah_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rumah_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_21.addFeatures(features_Rumah_21);
var lyr_Rumah_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_21, 
                style: style_Rumah_21,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_21.png" /> Rumah'
            });
var format_Hotel_22 = new ol.format.GeoJSON();
var features_Hotel_22 = format_Hotel_22.readFeatures(json_Hotel_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hotel_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_22.addFeatures(features_Hotel_22);
var lyr_Hotel_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_22, 
                style: style_Hotel_22,
                popuplayertitle: "Hotel",
                interactive: true,
                title: '<img src="styles/legend/Hotel_22.png" /> Hotel'
            });
var format_Toko_23 = new ol.format.GeoJSON();
var features_Toko_23 = format_Toko_23.readFeatures(json_Toko_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Toko_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_23.addFeatures(features_Toko_23);
var lyr_Toko_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_23, 
                style: style_Toko_23,
                popuplayertitle: "Toko",
                interactive: true,
                title: '<img src="styles/legend/Toko_23.png" /> Toko'
            });
var format_Sekolah_24 = new ol.format.GeoJSON();
var features_Sekolah_24 = format_Sekolah_24.readFeatures(json_Sekolah_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolah_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_24.addFeatures(features_Sekolah_24);
var lyr_Sekolah_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_24, 
                style: style_Sekolah_24,
                popuplayertitle: "Sekolah",
                interactive: true,
                title: '<img src="styles/legend/Sekolah_24.png" /> Sekolah'
            });
var format_Makam_25 = new ol.format.GeoJSON();
var features_Makam_25 = format_Makam_25.readFeatures(json_Makam_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Makam_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_25.addFeatures(features_Makam_25);
var lyr_Makam_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_25, 
                style: style_Makam_25,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_25.png" /> Makam'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_Nama_2.setVisible(true);lyr_Sawah_3.setVisible(true);lyr_Perkebunan_4.setVisible(true);lyr_Desa_Pageralang_poly_5.setVisible(true);lyr_JalanDesa_6.setVisible(true);lyr_Masjid_7.setVisible(true);lyr_Warung_8.setVisible(true);lyr_Warkop_9.setVisible(true);lyr_Pemancingan_10.setVisible(true);lyr_KolamRenang_11.setVisible(true);lyr_Apotek_12.setVisible(true);lyr_Balaidesa_13.setVisible(true);lyr_Lapangan_14.setVisible(true);lyr_Curug_15.setVisible(true);lyr_BengkelMobil_16.setVisible(true);lyr_Cell_17.setVisible(true);lyr_Bengkel_18.setVisible(true);lyr_PomBensin_19.setVisible(true);lyr_agen_20.setVisible(true);lyr_Rumah_21.setVisible(true);lyr_Hotel_22.setVisible(true);lyr_Toko_23.setVisible(true);lyr_Sekolah_24.setVisible(true);lyr_Makam_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_Nama_2,lyr_Sawah_3,lyr_Perkebunan_4,lyr_Desa_Pageralang_poly_5,lyr_JalanDesa_6,lyr_Masjid_7,lyr_Warung_8,lyr_Warkop_9,lyr_Pemancingan_10,lyr_KolamRenang_11,lyr_Apotek_12,lyr_Balaidesa_13,lyr_Lapangan_14,lyr_Curug_15,lyr_BengkelMobil_16,lyr_Cell_17,lyr_Bengkel_18,lyr_PomBensin_19,lyr_agen_20,lyr_Rumah_21,lyr_Hotel_22,lyr_Toko_23,lyr_Sekolah_24,lyr_Makam_25];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Nama_2.set('fieldAliases', {'id': 'id', 'Nama Rt/rw': 'Nama Rt/rw', });
lyr_Sawah_3.set('fieldAliases', {'id': 'id', 'SAWAH': 'SAWAH', });
lyr_Perkebunan_4.set('fieldAliases', {'id': 'id', 'Perkebunan': 'Perkebunan', });
lyr_Desa_Pageralang_poly_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'office': 'office', 'place': 'place', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'leisure': 'leisure', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_JalanDesa_6.set('fieldAliases', {'id': 'id', 'Jalan': 'Jalan', });
lyr_Masjid_7.set('fieldAliases', {'id': 'id', 'Masjid': 'Masjid', });
lyr_Warung_8.set('fieldAliases', {'id': 'id', 'WarungMkn': 'WarungMkn', });
lyr_Warkop_9.set('fieldAliases', {'id': 'id', 'Warkp': 'Warkp', });
lyr_Pemancingan_10.set('fieldAliases', {'id': 'id', 'Pemancinga': 'Pemancinga', });
lyr_KolamRenang_11.set('fieldAliases', {'id': 'id', 'KolamRenan': 'KolamRenan', });
lyr_Apotek_12.set('fieldAliases', {'id': 'id', 'Apotek': 'Apotek', });
lyr_Balaidesa_13.set('fieldAliases', {'id': 'id', 'Balaidesa': 'Balaidesa', });
lyr_Lapangan_14.set('fieldAliases', {'id': 'id', 'Lapangan': 'Lapangan', });
lyr_Curug_15.set('fieldAliases', {'id': 'id', 'Curug': 'Curug', });
lyr_BengkelMobil_16.set('fieldAliases', {'id': 'id', 'BngklMbl': 'BngklMbl', });
lyr_Cell_17.set('fieldAliases', {'id': 'id', 'Konter': 'Konter', });
lyr_Bengkel_18.set('fieldAliases', {'id': 'id', 'Bengkel': 'Bengkel', });
lyr_PomBensin_19.set('fieldAliases', {'id': 'id', 'POM': 'POM', });
lyr_agen_20.set('fieldAliases', {'id': 'id', 'AgenBIS': 'AgenBIS', });
lyr_Rumah_21.set('fieldAliases', {'id': 'id', 'Rumah': 'Rumah', });
lyr_Hotel_22.set('fieldAliases', {'id': 'id', 'Hotel': 'Hotel', });
lyr_Toko_23.set('fieldAliases', {'id': 'id', 'Toko': 'Toko', });
lyr_Sekolah_24.set('fieldAliases', {'id': 'id', 'Sekolah': 'Sekolah', });
lyr_Makam_25.set('fieldAliases', {'id': 'id', 'tpu': 'tpu', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Nama_2.set('fieldImages', {'id': 'TextEdit', 'Nama Rt/rw': 'TextEdit', });
lyr_Sawah_3.set('fieldImages', {'id': 'TextEdit', 'SAWAH': 'TextEdit', });
lyr_Perkebunan_4.set('fieldImages', {'id': 'TextEdit', 'Perkebunan': 'TextEdit', });
lyr_Desa_Pageralang_poly_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'leisure': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_JalanDesa_6.set('fieldImages', {'id': 'TextEdit', 'Jalan': 'TextEdit', });
lyr_Masjid_7.set('fieldImages', {'id': 'TextEdit', 'Masjid': 'TextEdit', });
lyr_Warung_8.set('fieldImages', {'id': 'TextEdit', 'WarungMkn': 'TextEdit', });
lyr_Warkop_9.set('fieldImages', {'id': 'TextEdit', 'Warkp': 'TextEdit', });
lyr_Pemancingan_10.set('fieldImages', {'id': 'TextEdit', 'Pemancinga': 'TextEdit', });
lyr_KolamRenang_11.set('fieldImages', {'id': 'TextEdit', 'KolamRenan': 'TextEdit', });
lyr_Apotek_12.set('fieldImages', {'id': 'TextEdit', 'Apotek': 'TextEdit', });
lyr_Balaidesa_13.set('fieldImages', {'id': 'TextEdit', 'Balaidesa': 'TextEdit', });
lyr_Lapangan_14.set('fieldImages', {'id': 'TextEdit', 'Lapangan': 'TextEdit', });
lyr_Curug_15.set('fieldImages', {'id': 'TextEdit', 'Curug': 'TextEdit', });
lyr_BengkelMobil_16.set('fieldImages', {'id': 'TextEdit', 'BngklMbl': 'TextEdit', });
lyr_Cell_17.set('fieldImages', {'id': 'TextEdit', 'Konter': 'TextEdit', });
lyr_Bengkel_18.set('fieldImages', {'id': 'TextEdit', 'Bengkel': 'TextEdit', });
lyr_PomBensin_19.set('fieldImages', {'id': 'TextEdit', 'POM': 'TextEdit', });
lyr_agen_20.set('fieldImages', {'id': 'TextEdit', 'AgenBIS': 'TextEdit', });
lyr_Rumah_21.set('fieldImages', {'id': 'TextEdit', 'Rumah': 'TextEdit', });
lyr_Hotel_22.set('fieldImages', {'id': 'TextEdit', 'Hotel': 'TextEdit', });
lyr_Toko_23.set('fieldImages', {'id': 'TextEdit', 'Toko': 'TextEdit', });
lyr_Sekolah_24.set('fieldImages', {'id': 'TextEdit', 'Sekolah': 'TextEdit', });
lyr_Makam_25.set('fieldImages', {'id': 'TextEdit', 'tpu': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Nama_2.set('fieldLabels', {'id': 'no label', 'Nama Rt/rw': 'no label', });
lyr_Sawah_3.set('fieldLabels', {'id': 'no label', 'SAWAH': 'no label', });
lyr_Perkebunan_4.set('fieldLabels', {'id': 'no label', 'Perkebunan': 'no label', });
lyr_Desa_Pageralang_poly_5.set('fieldLabels', {'osm_id': 'header label - always visible', 'osm_type': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_JalanDesa_6.set('fieldLabels', {'id': 'no label', 'Jalan': 'no label', });
lyr_Masjid_7.set('fieldLabels', {'id': 'no label', 'Masjid': 'no label', });
lyr_Warung_8.set('fieldLabels', {'id': 'no label', 'WarungMkn': 'no label', });
lyr_Warkop_9.set('fieldLabels', {'id': 'no label', 'Warkp': 'no label', });
lyr_Pemancingan_10.set('fieldLabels', {'id': 'no label', 'Pemancinga': 'no label', });
lyr_KolamRenang_11.set('fieldLabels', {'id': 'no label', 'KolamRenan': 'no label', });
lyr_Apotek_12.set('fieldLabels', {'id': 'no label', 'Apotek': 'no label', });
lyr_Balaidesa_13.set('fieldLabels', {'id': 'no label', 'Balaidesa': 'no label', });
lyr_Lapangan_14.set('fieldLabels', {'id': 'no label', 'Lapangan': 'no label', });
lyr_Curug_15.set('fieldLabels', {'id': 'no label', 'Curug': 'no label', });
lyr_BengkelMobil_16.set('fieldLabels', {'id': 'no label', 'BngklMbl': 'no label', });
lyr_Cell_17.set('fieldLabels', {'id': 'no label', 'Konter': 'no label', });
lyr_Bengkel_18.set('fieldLabels', {'id': 'no label', 'Bengkel': 'no label', });
lyr_PomBensin_19.set('fieldLabels', {'id': 'no label', 'POM': 'no label', });
lyr_agen_20.set('fieldLabels', {'id': 'no label', 'AgenBIS': 'no label', });
lyr_Rumah_21.set('fieldLabels', {'id': 'no label', 'Rumah': 'inline label - always visible', });
lyr_Hotel_22.set('fieldLabels', {'id': 'no label', 'Hotel': 'no label', });
lyr_Toko_23.set('fieldLabels', {'id': 'no label', 'Toko': 'no label', });
lyr_Sekolah_24.set('fieldLabels', {'id': 'no label', 'Sekolah': 'no label', });
lyr_Makam_25.set('fieldLabels', {'id': 'no label', 'tpu': 'no label', });
lyr_Makam_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});