const data = [
      {name :'Makassar',
        wisata : 
        [

        { name : 'Benteng Rotterdam',
          lat  : -5.134247, 
          long : 119.405443, 
          description : 'Tempat wisata di Makassar berikut ini merupakan salah satu tempat yang wajib dikunjungi ketika anda berlibur ke Makassar, salah satunya adalah Fort Rotterdam yang merupakan sebuah benteng peninggalan Kerajaan Gowa-Tallo. Benteng ini sendiri dapat dicapai dengan mudah dari pusat kota Makassar karena terletak di pinggiran sebelah barat Fort Rotterdam yang disebut juga dengan Benteng Ujung Pandang (Jum Pandang). Benteng ini dibangun sekitar tahun 1545 oleh Raja Gowa ke-9 yang bernama I Manrigau Daeng Bonto Karaeng Lakiung Tumapa’risi Kallona.',
          url : "https://www.pegipegi.com/travel/wp-content/uploads/2015/07/benteng-rotterdam-makassar.jpg",
          alamat:"Jl. Ujung Pandang, Bulo Gading, Ujung Pandang, Kota Makassar, Sulawesi Selatan 90171"
        },

        { name : 'Bugis Waterpark',
          lat  : -5.154576, 
          long : 119.494477, 
          description : 'Bugis Waterpark makassar merupakan salah satu tujuan rekreasi wisata menarik di Kota makassar. Berlokasi di perumahan bukit baruga, Waterpark dengan konsep bugis ini Menawarkan beragam wahana permainan air yang lengkap dan patut untuk dicoba. Wahana seperti Seluncuran, Lazy River, Kids Pool serta wahana lainnya bisa dimainkan di Bugis Waterpark Makassar baik anak maupun dewasa. Total lebih dari 20 wahana air di Bugis Waterpark Makassar bisa dimainkan.',
          url : "https://travelspromo.com/wp-content/uploads/2015/06/Bugis-Waterpark-Makassar-Slider.jpg",
          alamat: "Jl. Bukit Baruga Raya, Antang, Manggala, Kota Makassar, Sulawesi Selatan 90234"
        },

        { name : 'Desa Wisata Lakkang',
          lat  : -5.120164, 
          long : 119.449852, 
          description : 'Desa wisata ini memiliki pemandangan yang unik dan asri sebab berlokasi di tengah hiruk pikuk keramaian perkotaan Makassar. Desa Lakkang ini juga dikatakan sebagai delta, sebab terbentuk oleh sedimentasi yang berkumpul dalam kurun waktu tertentu. Selain itu, desa ini diapit oleh berbagai sungai yakni sungai Pampang dan Sungai Tallo. Sungai di bagian depan mempunyai lebar sekitar 10 m, sedang pada pertengahan sungai menuju dermaga Lakkang sungai ini memiliki lebar hingga 50 m dan berkedalaman 4 hingga 5 m. Salah satu daya tarik dan potensi hingga dipublikasikan sebagai tempat wisata unggulan adalah terdapat daerah pertanian dan kawasan nelayan di tengah perkotaan, empang, dan pepohonan yang telah berusia ratusan tahun.',
          url : "https://indrawisata.net/wp-content/uploads/2017/09/desa-akkang.jpg",
          alamat: "Pulau Lakkang, Kec. Tallo, Makassar."
        },

        { name : 'Lapangan Karebosi',
          lat  : -5.134693, 
          long :  119.413842, 
          description : 'Lapangan Karebosi adalah salah satu lapangan olahraga dan ruang publik masyarakat yang terdapat di pusat Kota Makassar. Lapangan Karebosi ini merupakan landmark di kota Makassar selain Pantai Losari..',
          url : "http://panduanwisata.id/files/2013/02/karebosigsfds.jpg",
          alamat: "Baru, Ujung Pandang, Makassar City, South Sulawesi 90174"
        },


        { name : 'Makam Kuno Raja Tallo',
          lat  : -5.103484, 
          long : 119.446012, 
          description : 'Makassar berkembang dari sebuah wilayah kecil bernama Tallo. Di wilayah inilah jazad para pendiri Makassar terbaring. Jika ingin menapak tilas dan memahami arti penting Makassar dalam sejarah peradaban nusantara, datanglah ke Tallo. Sebagaimana umumnya kota-kota lama, Tallo berada tepat di muara Sungai Tallo, tempat bertemunya sungai besar itu dengan Selat Makassar. Makam Raja-raja Tallo terletak di Kelurahan Tallo, Kecamatan Tallo, sekitar enam kilometer sebelah utara titik nol kilometer Kota Makassar, Lapangan Karebosi.',
          url : "https://2.bp.blogspot.com/-GPkmGY28_DI/VFZSbtQPg0I/AAAAAAAAAoo/x2XJFOzgaI0/s1600/Makam%2BRaja-raja%2BTallo.jpg",
          alamat: "Jl. Sultan Abdullah Raya No.3, Tallo, Kota Makassar, Sulawesi Selatan 90212",
        },

        { name : 'Masjid Raya Makassar',
          lat  : -5.130502, 
          long : 119.41965, 
          description : 'Masjid Raya Makassar merupakan sebuah masjid yang terletak di Makassar, Indonesia. Masjid ini dibangun pada tahun 1948 dan selesai pada tahun 1949. Masjid ini mengalami renovasi dari tahun 1999 hingga tahun 2005. Pertama kali dirancang oleh arsitek Muhammad Soebardjo setelah memenangi sayembara yang digelar panitia pembangunan masjid raya. Masjid ini dapat menampung hingga 10.000 jamaah. Mesjid dua lantai di Jl. Bulusaraung ini menggunakan bahan bangunan sekitar 80 persen dari bahan baku lokal, memiliki dua menara setinggi 66,66 meter, daya tampung 10.000 jamaah dan fasilitas berupa perpustakaan, kantor Majelis Ulama Indonesia (MUI) Sulawesi Selatan.',
          url : "https://upload.wikimedia.org/wikipedia/id/e/e5/Masjid_Raya_Makassar_depan.jpg",
          alamat: "Jalan Masjid Raya, Gaddong, Bontoala, Kota Makassar, Sulawesi Selatan 90156"
        },

        { name : 'Masjid Al-markas',
          lat  : -5.129942, 
          long : 119.426011, 
          description : 'Masjid Al-Markaz Al-Islami yang dikelola Yayasan Islamic Cenler ini merupakan masjid termegah dan terbesar di titik sentral kawasan timur Indonesia, kota Makassar, Provinsi Sulawesi Selatan. Masjid yang monumental tersebut berdiri kokoh sebagai pusat peradaban dan pengkajian Islam serta mencerminkan kebanggaan dan identitas masyarakat Sulawesi Selatan yang agamis, beradab, dan bernapaskan Islam.',
          url : "https://4.bp.blogspot.com/-9K-AzBHAXSw/VvUK3HPfQkI/AAAAAAAAB4I/vjtEmxPVzGINVFdTAjR6Lw4zZG26YXn-A/s1600/masjid_al-markaz_makassar_%255B10%255D.jpg",
          alamat: "Jl. Masjid Raya No.57, Timungan Lompoa, Bontoala, Kota Makassar, Sulawesi Selatan 90151"
        },

        { name : 'Monumen 40.000 Jiwa',
          lat  : -5.12968, 
          long : 119.432456, 
          description : 'Jika berlibur atau berwisata di Sulawesi Selatan, jangan lupa mengunjungi wisata sejarah. Di Kota Makassar misalnya, ada monumen korban 40.000 jiwa. monumen korban 40.000 jiwa merupakan salah satu obyek wisata sejarah Sulawesi Selatan. Monumen tersebut berdiri sebagai pengingat peristiwa tahun 1946 hingga tahun 1947 silam. Dimana pada saat itu menjadi lembaran kelam bagi masyarakat Sulawesi Selatan, sebanyak 40.000 orang tewas dibantai oleh pasukan belanda, yang dipimpin oleh Kapten Raymond Paul Piere Westerling dalam sebuah operasi penumpasan pemberontak..',
          url : "http://travel.rakyatku.com/thumbs/img_660_442_menengok-m_1463654910Satu.jpg",
          alamat: "Jalan Korban 40000 Jiwa, Wala-Walaya, Tallo, La'latang, Tallo, La'latang, Tallo, Kota Makassar, Sulawesi Selatan 90214"
        },

        { name : 'Monumen Mandala',
          lat  : -5.137631, 
          long : 119.413649, 
          description : 'Monumen Mandala dibangun pada tahun 1994 dan selesai pada tahun 1996 untuk mengenang jasa pahlawan dalam pembebaskan Irian Barat dari tangan para penjajah sekaligus hadiah atas jasa mantan Presiden Indonesia yang ke-2 yaitu Soeharto. Monumen Mandala merupakan menara yang menjulang setinggi 75 meter di pusat Kota Makassar. Monumen Mandala terdiri dari 4 lantai, di lantai 1 terdapat diorama relief dan replika pakaian dan perjuangan masyarakat Sulawesi Selatan pada abad XVII. Sedangkan di lantai 2 terdapat diaroma dan relief yang menceritakan tentang perjuangan pembebasan Irian Barat.',
          url : "https://media-cdn.tripadvisor.com/media/photo-s/0c/94/66/62/monumen-mandala.jpg",
          alamat: "Jl. Jend. Sudirman, Baru, Ujung Pandang, Kota Makassar, Sulawesi Selatan 90112"
        },

        { name : 'Pantai akkarena',
          lat  : -5.171716, 
          long : 119.387962, 
          description : 'Pantai Akkarena adalah pantai yang terletak di Kota Makassar, Sulawesi Selatan, Indonesia. Pantai Akkarena biasanya dijadikan pilihan sebagai tempat rekreasi bersama keluarga di hari libur sebagai sarana bersantai, bermain, atau berolahraga.',
          url : "http://promosi.pesona.travel/assets/imagecache/detailPage/wisata-indonesia-pantai-akkarena-keindahan-pasir-hitam-yang-memesona.jpg",
          alamat: "Jalan Tanjung Bunga, Kota Makassar, Sulawesi Selatan"
        },

        { name : 'Pantai Losari',
          lat  : -5.143608, 
          long : 119.407526, 
          description : 'Pantai Losari merupakan ikon Kota Makassar. Dulunya, pantai ini pernah mendapat julukan sebagai pantai yang mempunyai meja terpanjang di Indonesia, mungkin juga di dunia. Karena adanya warung-warung yang berjejer  di sepanjang bibir pantai. Tetapi sekarang, warung-warung tersebut sudah dipindah ke tempat yang tidak begitu jauh dari Pantai Losari. Langkah tersebut ditempuh oleh Pemkot Makassar agar obyek wisata di Sulawesi ini nyaman dan bersih.',
          url : "http://3.bp.blogspot.com/-GuR_ZD0mRT4/Ui-xmlgIZOI/AAAAAAAACUk/lSqsl4rfcSA/s1600/DSC_1334.JPG",
          alamat: "Jl. Metro Tj. Bunga, Maloku, Ujung Pandang, Kota Makassar, Sulawesi Selatan 90224"
        },

        { name : 'Pulau Gusung',
          lat  : -6.120147, 
          long : 120.456431, 
          description : 'Pulau Gusung Tallang, pulau kecil yang merupakan pulau terdekat dari pulau lae lae, dan pulau kayangan, untuk menuju kesana bisa di tempuh dengan waktu 10 menit naik kapal motor yang bisa menampung 8 orang dengan tempat di belakang KAMPUNG POPSA atau dermaga POPSA tak jauh dari pelabuhan Makassar Jl Pasar Ikan, nah dibelakang Popsa itu ada 2 jalanan yang langsung masuk ke pelabuhan kapal kapal kecil yang masing masing ada dermaga kecil sederhana, disitulah tertambat beberapa kapal kecil yang akan membawa penumpang ke pulau sebelah. Ada yang tujuan ke pulau kodingareng, samalona, kayangan, Gusung Tallang dan lainnya.',
          url : "https://americanindonesian.files.wordpress.com/2014/04/gusung-tallang-1.jpg",
          alamat: "Gusung Laelae Caddi"
        },


        { name : 'Pulau Kodingareng Keke',
          lat  : -5.104802, 
          long : 119.289333, 
          description : 'Pulau Kondingareng, Ujung Tanah, P. Kondingareng, Ujung Tanah, Kota Makassar, Sulawesi Selatan.',
          url : "http://1.bp.blogspot.com/-IFMvcpZDrco/UG2fmNbF72I/AAAAAAAAEA0/svgJ-7Yd62k/s1600/DSC03445.jpg",
          alamat: "Pulau Kondingareng, Ujung Tanah, P. Kondingareng, Ujung Tanah, Kota Makassar, Sulawesi Selatan"
        },


        { name : 'Pulau Samalona',
          lat  : -5.125153, 
          long : 119.343678, 
          description : 'Pulau Samalona memang jadi salah satu alternatif mudah dan menyenangkan bagi orang Makassar yang ingin berwisata. Khususnya wisata laut dan pantai. Tahu sendirilah, di Makassar sudah tidak ada lagi pantai yang representatif yang bisa dipakai sebagai tempat wisata. Pulau ini tidak terlalu jauh dari kota Makassar, bisa ditempuh dengan perjalanan menggunakan perahu kayu bermesin selama kurang lebih 30 menit. Paling lama 45 menit kalau memang kapalnya berjalan lambat. Ada dua tempat yang umum dipakai untuk menyeberang ke Pulau Samalona; satu di dermaga depan Benteng Rotterdam, satu lagi di dermaga Kayu Bangkoa.',
          url : "https://cdns.klimg.com/newshub.id/news/2016/05/26/62253/750x500-menikmati-sunyi-di-pulau-cantik-samalona-160526g.jpg",
          alamat: "Lae-Lae, Ujung Pandang, Makassar City, South Sulawesi"
        },


        { name : 'Trans Studio Theme Park',
          lat  : -5.158851, 
          long : 119.395377, 
          description : 'Trans Studio merupakan Universal Studio nya Indonesia. Trans Studio Makassar merupakan objek wisata indonesia terbesar di dunia karena trans studio dibangun di tanah dengan luas 12,7 hektar. Trans Studio merupakan objek wisata yang berada di kota dan paling banyak di kunjungi diantara objek-objek wisata pilihan yang ada di Indonesia Timur, karena Trans Studio memberikan banyak sekali pilihan wahana yang ada di dalamnya.Bisa dibilang Trans Studio Makassar merupakan objek wisata termegah yang pernah ada di Indonesia Timur.',
          url : "https://i0.wp.com/dolandolen.com/wp-content/uploads/2015/12/Trans-Studio-Makassar.jpg?fit=860%2C484&ssl=1",
          alamat: "Kawasan Terpadu Trans Studio Makassar, Jalan HM. Dg. Patompo, Metro Tanjung Bunga, Maccini Sombala, Tamalate, Kota Makassar, Sulawesi Selatan 90224"
        },

        ]

      },

      {name :'Gowa',
        wisata : 
        [

        { name : 'Air Terjun Takapala',
          lat  : -5.272924, 
          long : 119.857889, 
          description : 'Air terjun Takapala tingginya mencapai 109 meter dengan volume air yang dicurahkannya sangat besar terlebih lagi dikala musim hujan tiba.  Curahan airnya menimpa bongkahan batu-batu besar di dasarnnya, menimbulkan suara gemuruh dan percikan air membentuk kabut tipis sejauh 20 m. Berjarak sekitar 70 km dari Makassar (waktu tempuh sekitar 1 jam berkendara) atau 6 km dari kota Malino, ibukota kecamatan Tinggimoncong.  Kondisi jalan menuju air terjun ini relatif baik dengan sedikit berliku naik turun bukit, hanya beberapa titik dijumpai jalan yang berlubang.  Sepanjang perjalanan akan dijumpai pemandangan yang elok dengan salah satu sisi jalannya adalah jurang.',
          url : "http://ararentalmakassar.com/wp-content/uploads/2014/12/mg_4115-2-1-1024x683.jpg",
          alamat: "Bonto Lerung, Tinggimoncong, Kabupaten Gowa, Sulawesi Selatan 92174"
        },

        { name : 'Benteng Somba Opu',
          lat  : -5.189381, 
          long : 119.402229, 
          description : 'Benteng Somba Opu adalah salah satu wisata sejarah di Sulawesi Selatan. Benteng ini merupakan komplek wisata di bawah naungan dinas pariwisata Pemda Kabupaten Gowa. Kawasan ini terletak di Jalan Dg Tata, Kelurahan Benteng Somba Opu, Kecamatan Barombong. Lokasi benteng Somba Opu berdekatan dengan Universitas Negeri Makassar kampus Parang Tambung.Benteng Somba Opu dibangun bersebelahan dengan sungai Jene Berang dan bisa melalui jalan Dg Tata ataupun melalui jalan Cendrawasih atau sekitar 6 km dari pusat kota Makassar. Jarak benteng ini dari pusat kota makassar sekitar 15 menit, sayangnya tidak akses transportasi publik yang menuju ke lokasi ini. Untuk mengakses daerah adalah dengan menggunakan jasa supir atau taksi. Kawasan ini cukup terkenal terlebih setelah dibangun Gowa Discovery Park yaitu taman wisata dan taman burung milik Pemda Gowa.',
          url : "https://dolandolen.com/wp-content/uploads/2015/12/Benteng-Somba-Opu.jpg",
          alamat: "Barombong Kabupaten Gowa Sulawesi Selatan 90224 Indonesia"
        },
        
        { name : 'Danau Tanralili',
          lat  : -5.312165, 
          long : 119.912181, 
          description : 'Danau tanralili merupakan destinasi terbaru yang kerap di kunjungi pendaki yang akan menikmati pemandagan alam dengan sensasi jalur trekir yang menatang dan tidak memakan waktu yang kira-kira 2-3 jam dari desa terakhir.Danau tanralili berada pada ketinggian 1.454 mdpl, danau tanralili barada didesa lengkese kecamatan parigi kabupaten gowa. Desa lengkese bisa ditemukan dari kota malino gowa melewati air terjun takappala kira-kira 1 jam dari kota malino mengunakan kendaraan pribadi dikarnakan kendaraan umum jarang sekali masuk ke destinasi tersebut. Sesampainya di desa lengkese anda harus membayar uang masuk resgistrasi masuk sebesar Rp.2000-/org, kemudian anda bisa menaruh kendaraan anda di sekitar rumah warga/tata istilah panggilan warga di daerah tersebut. Kemudian kita bisa bertanya jalur menuju ke tanralili ke pada tata tersebut',
          url : "https://1.bp.blogspot.com/-qBWrKOuwA9U/VX-OVpGbYDI/AAAAAAAABsU/WBpKlJWss-Q/s1600/1cc.jpg",
          alamat: "Manimbahoi, Parigi, Manimbahoi, Gowa, Kabupaten Gowa, Sulawesi Selatan 92174"
        },

        { name : 'Gowa Discovery Park',
          lat  : -5.192145, 
          long : 119.408135, 
          description : 'Ada dua tempat yang bisa dikunjungi oleh wisatawan di Gowa Discovery Park, salah satunya adalah Waterboom dengan berbagai wahana seru. Beragam permainan bisa dicoba oleh pengunjung, di antaranya adalah kolam sliding yang akan memacu adrenalin. Hal yang perlu diperhatikan adalah penggunaan pakaian, sebab pengelola melarang bermain di air menggunakan celana jeans. Selain wahana air, obyek wisata yang bisa dikunjungi selanjutnya adalah Taman Burung. Di tempat ini, kamu bisa bebas berinteraksi dan bermain bersama 18 jenis unggas dari berbagai daerah.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/gdp-pp_20150525_170323.jpg",
          alamat: "Jalan Tumanurung, Benteng Somba Opu, Barombong, Kota Makassar, Sulawesi Selatan 90224"
        },


        { name : 'Wisata Kebun Gowa',
          lat  : -5.23494, 
          long : 119.522657, 
          description : 'Wisata Kebun Gowa Makassar merupakan salah satu kawasan wisata di Sulawesi Selatan yang cocok untuk menghilangkan penat. Sesuai dengan namanya Wisata Kebun tempat ini menyediakan kebun buah-buahan lengkap dengan berbagai fasilitas penunjang wisata.Tempat ini sangat nyaman untuk dijadikan sebagai tujuan wisata. Suasananya sejuk, udaranya segar karena terdapat pepohonan yang rindang yang ditanam oleh pihak pengelola.Pohon buah-buahan yang ditanam diantaranya Jeruk, Durian, Mangga, Rambutan dan berbagai tanaman buah lainnya. Tak hanya itu, terdapat juga tanaman hias serta bunga yang turut mempercantik kawasan ini.',
          url : "https://i2.wp.com/www.wisatabagus.net/wp-content/uploads/2017/05/Wisata-Kebun-Gowa-Makassar.png?resize=500%2C329",
          alamat: "Jl. Malino, Bontomanai, Bontomarannu, Kabupaten Gowa, Sulawesi Selatan 92171"
        },


        { name : 'Air Terjun Parangloe',
          lat  : -5.228808, 
          long : 119.663912, 
          description : 'Air terjun Parangloe terletak di Parangloe kab.Gowa Sulsel, sekitar 30 km dari kota makassar arah ke Malino. Banyak yang belum mengetahui tempat ini karena memang belum disentuh oleh pemerintah untuk dijadikan sebagai tempat wisata. Masyarakaat parangloe seringkali menyebutnya Air terjun bantimurung 2, Air terjun bertingkat dan Air terjun bersusun. jika dilihat dari nama-nama tersebut semuanya benar karena Air terjun Parangloe konon katanya bermuara dari Air terjun Bantimurung yang ada di maros. Air terjun bertingkat ataupuun bersusun diambil dari karakteristik yang memang bertingkat dan bersusun.',
          url : "https://upload.wikimedia.org/wikipedia/commons/6/63/Parangloe.jpg",
          alamat: "Belapunranga, Parangloe, Kabupaten Gowa, Sulawesi Selatan 92173"
        },


        { name : 'Air Terjun Pelangi Jonjo',
          lat  : -5.288115, 
          long : 119.766435, 
          description : 'Air Terjun Pelangi bukanlah pilihan terburuk untuk mengentaskan stres yang anda alami. Destinasi wisata di Kabupaten Gowa ini menawarkan pemandangan alam yang masih asri dan alami. Wajar saja, lokasi ini baru dibuka dan diperkenalkan sekitar sebulan yang lalu. Destinasi wisata ini terletak di Desa Jonjo, Kecamatan Parigi, Kabupaten Gowa. Jika dari Makassar, jarak tempuh menuju lokasi ini sekitar 60 km atau sekitar 2 jam dengan berkendara motor atau mobil.Setiba di Desa Jonjo, sebelum memasuki daerah Air Terjun Pelangi, kendaraan harus diparkir di pekarangan rumah yang dimanfaatkan warga. Biaya parkir sebesar Rp3.000. Itu belum termasuk biaya karcis masuk Rp5.000. Meski tergolong destinasi wisata baru, akses jalan menuju Air Terjun Pelangi sudah agak baik. Berkat swakelola warga desa di sana. “Biasanya kan yang dikeluhkan pengunjung itu kalau ke tempat (wisata) baru jalan masuknya yang susah, makanya itu dulu yang kita perbaiki,” tutur salah seorang warga yang ditemui di sana.',
          url : "https://1.bp.blogspot.com/-DwZ0L4oxBmU/V5Xm8rkeozI/AAAAAAAAApE/Bv9PwceZMAMnzWYjEu7u5VctGmFfGHhdwCLcB/s1600/1%2B%25282%2529.JPG",
          alamat: "Jonjo, Parigi, Kabupaten Gowa, Sulawesi Selatan 92174"
        },


        { name : 'Air Terjun Parang Bugisi',
          lat  : -5.25417, 
          long : 119.867934, 
          description : 'Salah satu obyek wisatanya berupa air terjun tersebar diberbagai kawasannya dengan panorama alamnya yang mempesona. Air terjun yang populer antara lain air terjun Lembanna, air terjun seribu tangga, air terjuntakapala, air terjun lembanna, air terjun malino, air terjun biroro, dan sebuah kawasan air terjun yang masih jarang dikunjungi yakni air terjun Parang Bugis.Letak air terjun Parang Bugis tidak jauh dari kawasan hutan pinus yang selalu ramai dikunjungi orang. Kurang lebih sekitar 5 km dengan jalan aspal yang mulus. Menuju kelokasi air terjun, pengunjung harus berjalan kaki sejauh 1 kilometer menyusuri jalan tanah berkelok-kelok dengan pemandangan pesawahan serta hutan bambu yang teduh dan asri. Sepintas mirip pemandangan alam di Bali.',
          url : "http://1.bp.blogspot.com/-a7FOA75KrnI/VQAnQ7nmuMI/AAAAAAAAB_k/iuZ9t_sldFI/s1600/upload%2BPB1.jpg",
          alamat: "Bulutana, Tinggimoncong, Kabupaten Gowa, Sulawesi Selatan 92174"
        },


        { name : 'Bendungan Kampili',
          lat  : -5.277673, 
          long : 119.513286, 
          description : 'bendungan kampili dijadikan tempat wisata, maka bisa dibilang tempat ini merupakan destinasi yang memiliki daya tarik tinggi di mata para wisatawan, mengapa tidak, karena bendungan kampili memiliki bebatuan yang teratur rapi dan betul-betul menunjukkan keindahan alam yang dibuat sang pencipta, selain itu bendungan kampili yang sangat tinggi juga memperlihatkan keindahan air terjunnya yang teratur rapi, yang dapat memanjakan para penikmatnya.',
          url : "https://3.bp.blogspot.com/-ezspM3Kc7DY/Vh3DgoO1edI/AAAAAAAAFH8/HXSfE1qrVpc/s640/Bendungan%2BKampili.jpg",
          alamat: "Bontoramba, Kampili, Pallangga, Bontoramba, Pallangga, Kabupaten Gowa, Sulawesi Selatan 92171"
        },


        { name : 'Air Terjun Biroro',
          lat  : -5.26967, 
          long : 119.871351, 
          description : 'Air terjun Biroro ini terletak di desa Biroro kelurahan Bontolerung, Kecamatan Tinggi Moncong, kabupaten Gowa. Jaraknya sekitar 2 KM dari kota Malino. Jalan menuju ke daerah ini lumayan sulit karena akses jalan yang banyak tanjakan dan turunan serta kondisi jalan yang masih berlubang sehingga mesti hati-hati jika berkendara ke tempat ini. Jarak air terjun dari akses jalan sekitar 200 meter. Kita mesti berjalan kaki untuk menuju lokasi air terjun. Dalam perjalanan itu kita akan disuguhi oleh hamparan persawahan yang luas yang bertingkat-tingkat. Panorama di tempat ini sungguh indah. Setelah itu kita akan menuruni jalan setapak yang berbatu-batu dan melewati jembatan bambu. Disekitar daerah ini tumbuh tinggi subur bambu-bambu dengan ukuran yang cukup besar.',
          url : "https://2.bp.blogspot.com/-n2O6oaBNjDk/VkwPp3FIWOI/AAAAAAAABeg/zLoPby7UujY/s1600/Air%2Bterjun%2BBiroro%252C%2BSajian%2BKesegaran%2BAlam%2BTinggi%2BMoncong.jpg",
          alamat: "Bonto Lerung, Tinggimoncong, Kabupaten Gowa, Sulawesi Selatan 92174"
        },


        { name : 'Malino Highlands',
          lat  : -5.2743871, 
          long : 119.5740034, 
          description : 'Malino berada di Kecamatan Tinggimoncang, Kabupaten Gowa, Sulawesi Selatan. Dari pusat kota Makassar, Malino Highlands berjarak 80 km ke arah selatan. Lokasi dari Malino Highlands terbilang sangat strategis. Untuk menuju tempat wisata ini, Anda hanya memerlukan waktu kurang lebih 2,5 jam dari pusat kota Makassar dan dapat ditempuh dengan berbagai jenis kendaraan.Untuk masuk ke area Malino Highlands, Anda akan dikenakan biaya retribusi sebesar 50.000 Rupiah bagi orang dewasa dan 25.000 Rupiah bagi anak-anak.',
          url : "http://anekatempatwisata.com/wp-content/uploads/2015/11/Malino-Highland-1.jpg",
          alamat: "Jl. Malino, Bontoramba, Bontomarannu, Kabupaten Gowa, Sulawesi Selatan 90562"
        },


        { name : 'Bendungan bili-bili',
          lat  : -5.258745, 
          long : 119.594945, 
          description : 'Sungai Jeneberang dengan panjang 75 km dan luas daerah pengalirannya 727 km2 bersumber dari Gunung Bawakaraeng pada elevasi + 2.833,00 MSL. Sungai ini sering meluap pada saat musim hujan seperti yang terjadi pada bulan Desember sampai dengan Januari 1976 hampir 2/3 Kota Ujung Pandang tergenang. Timbulnya daerah genangan ini diakibatkan meluapnya air sungai Jeneberang di daerah hilir Jembatan Sungguminasa dan sarana drainase yang tidak memadai antara lain saluran Sinrijala, Jongala dan Panampu. Sedang pada musim kemarau kebutuhan air untuk Kota Ujung Pandang yang berpenduduk 944.372 jiwa (menurut data tahun 1990) hanya memenuhi 35% dari kebutuhan.',
          url : "http://sda.pu.go.id/wiki/images/2/22/Bili1.jpg",
          alamat: "Bontomarannu, kabpaten gowa, sulawesi selatan"
        },


        { name : 'Air Terjun Lembanna',
          lat  : -5.258059, 
          long : 119.919086, 
          description : 'Keindahan air terjun menjadi daya tarik tersendiri bagi para pendaki,khususnya yang melakukan pendakian di dataran tinggi Malino, Kabupaten Gowa, Sulsel yang mengambil rute pendakian Gunung Bawakaraeng, Lembah Ramma, dan sekitarnya.Desa Lembanna (1513 mdpl) sekitar 10 kilometer dari Kota Malino, merupakan titik tolak para pendaki yang akan melakukan pendakian Gunung Bawakaraeng. Gunung ini memiliki air terjun yang indah, Lembanna. Air terjun yang terletak di kaki Gunung Bawakareng ini wajib dikunjungi setiap pedaki.Jika hiking, memang terasa tidak lengkap bila tidak mampir berfoto dan menikmati sejuknya air terjun yang airnya berasal dari area sekitar Gunung Bawakaraeng..',
          url : "https://img.winnetnews.com/uploads/content/2016/05/19/air-terjun-lembanna-752x440.jpg",
          alamat: "Pattapang, Tinggimoncong, Kabupaten Gowa, Sulawesi Selatan 92171"
        },


        { name : 'Lembah Ramma',
          lat  : -5.29575, 
          long : 119.915652, 
          description : 'Lembah Ramma Yang secara administratif terletak Kabupaten Gowa ini sudah familiar di Masyarakat Sulsel, terutama para penggiat alam bebas. Lembah ramma terletak di kawasan Gunung Bawakaraeng, tepatnya disekitar lembah Gunung Bawakaraeng. Untuk bisa mencapai Lembah Ramma, rute yang ditempuh tidak terlalu sulit. Dari Makassar, menuju Malino, Kabupaten Gowa. Dari Malino, ada dua jalur ke destinasi wisata yakni lewat Jalur Pendakian Bawakaraeng atau Jalur Lembanna dan Via Jalur Majannang. Kalau lewat jalur lembanna, maka kita ambil start point di Dusun Lembanna, yang merupakan permukiman penduduk terdekat dari Ramma. Agar perjalanan lancar, ada baiknya menggunakan sepeda motor. Dari Makassar ke Lembanna dengan sepeda motor membutuhkan waktu sekitar 3-4 jam.',
          url : "https://1.bp.blogspot.com/-V6yWNcm5lc4/VRB6YS28RLI/AAAAAAAAU1I/XdAzcjHFJSY/s1600/_MG_4874.jpg",
          alamat: "Bonto Lerung, Tinggimoncong, Kabupaten Gowa, Sulawesi Selatan 92174"
        },


        { name : 'Padivalley Golf Club',
          lat  : -5.202586, 
          long : 119.593041, 
          description : 'Padang golf yang terletak di Patalassang, Bontonompo, Gowa, Sulawesi Selatan ini bisa dicapai dengan berkendara sekitar 45 menit dari pusat bisnis kota Makassar. Lapangan Padivalley Golf Club merupakan lapangan dengan 18 holes yang didesain melebihi standar desain USGA sehingga menjadikannya lapangan bertaraf internasional pertama di Sulawesi. Lapangan ini didesain oleh Bob Moore dari firma desain JMP Group, perancang yang juga membangun Royale Jakarta Golf Club (Halim III). Jadi, tak mengherankan jika lapangan ini memiliki beberapa kualitas dan karakter yang mirip dengan lapangan Royale Jakarta Golf Club.',
          url : "https://content.golfscape.com/c-a5029/padi-valley-golf-club-1-l.jpg",
          alamat: "Pattalassang, Pallantikang, Gowa, Kabupaten Gowa, Sulawesi Selatan 92173"
        },


        { name : 'Museum Balla Lompoa',
          lat  : -5.206918, 
          long : 119.45246, 
          description : 'Museum Balla Lompoa merupakan wisata sejarah yang berada di daerah Gowa, Makassar, Sulawesi Selatan. Museum ini adalah rekonstruksi dari Istana Kerajaan Gowa yang didirikan oleh pemerintahan Raja Gowa ke-31 pada tahun 1936. Arsitektur bangunan ini berbentuk rumah khas orang Bugis, yaitu rumah panggung yang terbuat dari kayu ulin atau kayu besi. Museum diibangun di atas lahan seluas satu hektar yang dibatasi oleh pagar tembok yang tinggi.Bangunan ini terdiri dari dua bagian, yaitu ruang utama seluas 60 x 40 meter yang di dalamnya terdapat kamar pribadi raja, tempat penyimpanan benda-benda bersejarah, bilik kerajaan dengan luas masing-masing bilik berukuran 6 x 5 meter, dan ruang teras (ruang penerima tamu) seluas 40 x 4,5 meter. Bangunan ini banyak dilengkapi jendela yang merupakan ciri khas rumah bugis dengan ukuran masing-masing jendela adalah 0,5 x 0,5 meter.Di museum ini terdapat sekitar 140 koleksi benda-benda kerajaan yang bernilai tinggi, seperti mahkota, gelang, kancing, kalung, keris, dan benda-benda lain yang umumnya terbuat dari emas murni dan dihiasi berlian, batu rubi, dan permata. Di  antara koleksi tersebut, rata-rata memiliki bobot 700 gram bahkan ada yang sampai atau lebih dari 1 kilogram.',
          url : "http://sejarahri.com/wp-content/uploads/2014/02/dsc_4398.jpg",
          alamat: "Jl. K.H. Wahid Hasyim No. 39, Gowa, Sungguminasa, Makassar, Kabupaten Gowa, Sulawesi Selatan 92111"
        },


        { name : 'Makam Pahlawan Sultan Hasanuddin',
          lat  : -5.19236, 
          long : 119.451923, 
          description : 'Obyek Wisata Sejarah di Sulawesi Selatan ini tepatnya terletak di komplek pemakaman raja-raja Gowa di Katangka Somba Opu Gowa. Di tempat yang sama dimakamkan pula Sultan Alauddin (Raja yang mengembangkan agama Islam pertama di Kerajaan Gowa) dan disebelah kiri depan komplek makam, terdapat lokasi tempat pelantikan raja Gowa yang bernama Batu Pallantikan.Akses ke kawasan Makam Sultan Hasanuddin sangat dekat dari Kota Makassar ,menggunakan kendaraan darat 30 menit. Sultan Hasanuddin putera kedua dari Sultan Malikussaid, Raja Gowa ke-15. Sultan Hasanuddin memerintah Kerajaan Gowa, ketika Belanda yang diwakili Kompeni sedang berusaha menguasai perdagangan rempah-rempah.',
          url : "http://wisata.pesona.travel/assets/imagecache/detailPage/wisata-indonesia-yuk-wisata-sejarah-ke-2-makam-pahlawan-makassar.JPG",
          alamat: "Makam Sultan Hasanuddin Raja Gowa ke-XVI, Makassar, South Sulawesi, Katangka, Somba Opu, Kabupaten Gowa, Sulawesi Selatan 92114"
        },


        { name : 'Holyland Malino',
          lat  : -5.257876, 
          long : 119.693422, 
          description : 'inilah taman wisata keluarga yang ada di Bilibili Sulawesi selatan, taman yang berdiri di lahan seluas 47 hektar ini mengusung konsep replika Holy Land Israel dengan gaya klasik eropa. Pengunjung dapat menikmati indahnya alam dan melihat replika bangunan bangunan yang ada pada awal abad masehi. Selain untuk berwisata dan olahraga, taman wisata Bilibili ini juga dapat menjadi alternatif bagi Anda yang ingin melangsungkan acara ataupun sekedar mencari spot indah untuk berfoto. Bagi yang ingin berkunjung, taman wisata Holy land (Bilibili) terbuka untuk umum setiap harinya dari pagi hingga sore hari. Taman wisata ini sangat bagus untuk melatih gaya hidup sehat, olahraga lari dan yoga, mengingat taman ini dipenuhi tanaman dan phon yang rindang.',
          url : "https://1.bp.blogspot.com/-Rx4vHdZLTl0/WQRLy6Cj53I/AAAAAAAAGYk/CsurdcKFht8mW9zg5VkIYdhJ5CgKZpAvwCLcB/s320/holy%2Bland%2Bgowa.jpg",
          alamat: "Lonjoboko, Parangloe, Lonjoboko, Parangloe, Kabupaten Gowa, Sulawesi Selatan 92173"
        },

        ]

    },


      {name :'Takalar',
      wisata :
      [

        { name : 'Pantai Topejawa',
          lat  : -5.508751, 
          long : 119.431684, 
          description : 'Wisata pantai Topejawa yang terletak di Desa Topejawa, Kecamatan Mangngarabombang, Takalar. Wisata Pantai Topejawa dilengkapi aula serbaguna yang dapat digunakan berbagai acara seperti untuk pesta perkawinan, tempat rapat, maupun aula pertemuan.Selain itu, ada pula Fasilitas kolam renang, cafe, masjid, gazebo, untuk pengunjung. Khusus untuk kolam renang terdiri dari tiga kolam, yakni kolam pertama khusus untuk anak-anak, kolam kedua untuk laki-laki, kolam ketiga untuk perempuan. Harga tiket pada hari Senin-Kamis Rp 15 ribu, sedangkan untuk weekend Sabtu- Minggu harga tiketnya Rp 25 ribu per orang.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/topejawa_20171220_212856.jpg",
          alamat: "Topejawa, Mangara Bombang, Kabupaten Takalar, Sulawesi Selatan 92261"
        },


        { name : 'Pantai Bintang',
          lat  : -5.329796, 
          long : 119.356662, 
          description : 'Wisata pantai Bintang Galesong berada ditepi pantai Galesong dengan pemandangan langsung laut dan pulau Sanrobengi. Dengan adanya fasilitas penginapan, cafe, tiga kolam renang, lapangan futsal dan bulu tangkis serta aula, menjadikan Bintang Galesong sebagai salah satu alternatif tempat tujuan liburan keluarga, tempat acara gathering, outbond atau training karyawan yang impresif. Salah satu fasilitas yang tersedia di Wisata Pantai Bintang Galesong adalah cafe yang terletak di tepi pantai dan kolam renang di dalam area wisata pantai ini sehingga pengunjung dapat menikmati aneka hidangan makanan, snack dan minuman yang tersedia di cafe ini sambil menikmati udara segar, sejuk dan sehat dari laut, menikmati pemandangan laut, pemandangan pulau kecil Sanrobengi atau view kolam renang. Wisata Pantai Bintang Galesong juga menyediakan penginapan yang terdiri dari kamar VIP, kamar standard dan kamar family.',
          url : "http://timurindonesia.com/wp-content/uploads/2017/08/IMG_20170729_130958-1-e1501558498259.jpg",
          alamat: "Boddia, Galesong, Kabupaten Takalar, Sulawesi Selatan 92255"
        },

        { name : 'Teluk Laikang',
          lat  : -5.585816, 
          long : 119.484702, 
          description : 'Teluk Laikang terletak di Dusun Puntondo, Desa Laikang, Kecamatan Mangarabombang, Kabupaten Takalar. Ada satu spot khusus yang telah dibangun di teluk ini. Tujuannya menjadi satu lokasi wisata baru setelah sebelumnya dibiarkan tak terurus. Tak perlu banyak sentuhan sebab pada dasarnya, keindahan alam di Teluk Laikang memang telah ada. Kini dilengkapi dengan penginapan dan cottage-cottage beserta area memancing, menjadikannya lebih paripurna. Fasilitas umum juga telah dibangun. Ada area parkir, masjid, kolam pancing, rumah singgah, serta lapangan olahraga. Jualan utamanya adalah pemandangan laut dan olahraga laut. Kawasan ini dikenal memiliki keindahan bawah laut yang relatif masih terjaga sehingga sangat cocok bagi mereka yang suka wisata bawah laut. Pengelola juga membangun kamar mandi dan toilet umum di kawasan itu. Luas lahan yang dipakai sebagai area pengembangan yang di dalamnya berisi infrastruktur pendukung wisata laut, mencapai dua hektare. Dulunya lahan tersebut hanya berupa tambak tak produktif. Setelah melewati kawasan penginapan dan jejeran cottage, pengunjung akan disuguhkan oleh pemandangan laut yang begitu indah. Ini dilengkapi dengan pesisir pantai yang dihiasi dengan pasir putih. Di sebelah selatan zona ini, terdapat kampung nelayan yang sebagian besar dimanfaatkan untuk budidaya rumput laut.',
          url : "https://1.bp.blogspot.com/-fHyKM99i-SA/V1gLE3HmV_I/AAAAAAAAAHM/A3LdPmlKr1Y1ZSrJaaL6DKVY6IQ485nywCLcB/s1600/IMG20160309091005.jpg",
          alamat: "Laikang, Mangara Bombang, Kabupaten Takalar, Sulawesi Selatan"
        },


        { name : 'PPLH Puntondo',
          lat  : -5.588137, 
          long : 119.486799, 
          description : 'Jika anda mengunjungi tempat ini anda bisa menemukan keindahan alam yang mungkin berbeda dengan tempat lainnya, karena keindahan alam di tempat ini dipadukan dengan arsitektur rumahnya yang unik dan seakan menyatu dengan alam yang ada di Puntondo. Fasilitas yang ada di tempat ini yaitu lahan untuk menanam pohon jika anda membawa pohon untuk di tanam, kemudian ada aulu untuk belajar bersama atau kegiatan seminar, yang menarik dari ruang aula ini yaitu arsitektuknya yang sangat-sangat unik, dan pastinya 100% terbuat dari kayu alam. Selain fasilitas tersebut terdapat juga aula, kemudian bungalow, tempat menginap untuk kontingen putra dan kontingen putri jika anda membawa sebuah kontingen. Fasilitas lainnya yang ada yaitu kamar mandi (wc), restaurant khas puntondo yang menyediakan berbagai macam makanan darat maupun makanan laut. Anda tidak akan menyesal dan pastinya anda bisa survive jika anda berkunjung ke tempat ini.',
          url : "https://www.pplhindonesia.or.id/id/images/photos/puntondo01.jpg",
          alamat: "Dusun Puntondo, Desa Laikang, Kecamatan Mangarabombang, Laikang, Mangara Bombang, Kabupaten Takalar, Sulawesi Selatan 90132"
        },


        { name : 'Pantai Punaga',
          lat  : -5.582848,
          long : 119.431985, 
          description : 'wisata Pantai Punaga merupakan objek wisata pantai yang terletak di Desa Punaga, Kecamatan Mangngarabombang. Jaraknya, sekitar 25 kilometer dari jantung kota Kabupaten Takalar. Untuk masuk ke Pantai Punaga, biayanya cukup murah hanya Rp 10 ribu per orang. Ada gazebo yang disediakan oleh pengelola dengan harga sewa Rp 100 ribu per hari, mampu memuat hingga 20 orang.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/pantai-punaga_20170813_143408.jpg",
          alamat: "Punaga, Mangara Bombang, Kabupaten Takalar, Sulawesi Selatan 92261"
        },


        { name : 'Taman Wisata Rita',
          lat  : -5.351734, 
          long : 119.363145, 
          description : 'Taman Wisata Rita (TWR), Desa Bontokanang, Galesong Selatan, Takalar, Sulawesi Selatan. Terdapat lima kolam renang di TWR dengan berbagai macam ukuran dan kedalaman. Pengunjung dari usia balita hingga dewasa bisa menikmati kolam renang yang dilengkapi seluncuran setinggi antara 3 hingga 5 meter. pengunjung cukup membayar tiket masuk sebesar Rp 15 ribu. Dengan tiket itu, pengunjung bisa menikmati fasilitas yang ada di TWR, mulai dari kolam renang hingga gazebo. Terdapat pula toilet terpisah untuk pria dan wanita, masjid, dan puluhan gazebo berbagai ukuran yang bisa menampung antara lima hingga 15 orang..',
          url : "http://2.bp.blogspot.com/-VzsF9BzhNZM/VSorizD4FqI/AAAAAAAAABk/SuMD85WoN2A/s1600/IMG_20150412_160231%5B1%5D.jpg",
          alamat: "Dusun Rita, Desa Bonto Kanang, Kec. Galesong Selatan, Bonto Kanang, Galesong Sel., Kabupaten Takalar, Sulawesi Selatan 92254"
        },


        { name : 'Takalar Beach Waterboom',
          lat  : -5.518819, 
          long : 119.434587, 
          description : 'Takalar Beach Waterboom objek wisata baru Kabupaten Takalar, di Desa Tope Jawa, Kecamatan Mangngarabombang. Tiket masuk Rp 30 ribu per pengunjung. Selain fasilitas kolam renang dan waterboom, tersedia juga tempat karaoke, kafe, tempat bakar ikan, gazebo, dan villa untuk penginapan. Tarif kamar vila Rp 600 ribu per malam hingga Rp 1,5 juta. Tarif gazebo Rp 50 ribu. Tersedia baju dan celana renang untuk disewa. Sewanya Rp 5000 sampai Rp 15 ribu. Takalar Beach Waterboom buka setiap hari, mulai pukul 08.00-18.00 wita. Pengunjung yang datang minimal 10 orang akan mendapatkan diskon, yaitu, satu orang akan digratiskan masuk. Dari waterboom ini Anda dapat menikmati panorama laut lepas dan sungai.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/takalar-beach-3_20160828_234036.jpg",
          alamat: "Topejawa, Mangara Bombang, Kabupaten Takalar, Sulawesi Selatan 92261"
        },

      ]

    },


      {name :'Jeneponto',
      wisata :
      [

      { name : 'Batu Karst Pundo Siping',
          lat  : -5.561248, 
          long : 119.517775, 
          description : 'Suasana alam yang dihiasi dengan Batu yang unik dan menarik, tepatnya Objek Wisata alam tersebut berada di Desa Garasikan, Kecamatan Bangkala, Kabupaten Jeneponto. Namanya Batu Sipinga, terletak di Dusun Karampuang, Desa Garassikang, Kecamatan Bangkala Barat Kabupaten Jeneponto. Tempat wisata ini menyajikan gugusan batu menyerupai batu karang berwarna hitam. Uniknya, beberapa gugusan batu tersebut menyerupai bentuk hewan dan tumbuhan.',
          url : "https://lh3.googleusercontent.com/p/AF1QipOdV9sGpDXhOyb-u6v-AeM31LDOMLCUxgZdkQOQ=s1600-w400",
          alamat: "Garassikang, Bangkala Bar., Kabupaten Jeneponto, Sulawesi Selatan 92352"
        },


        { name : 'Air Terjun Tama’lulua',
          lat  : -5.500902, 
          long : 119.849778,
          description : 'Air terjun Tama’lulua jadi salah satu air terjun teristimewa yang terletak di Desa Ramba, Kecamatan Rumbia, Kabupaten Jeneponto, Sulawesi Selatan. Air terjun Tama’lulua juga dikenal dengan nama Air terjun Bossolo. Untuk sampai ke Air terjun Tama’lulua memang terbilang tak mudah, karena kamu harus mendaki dengan kondisi jalan yang terjal dan bebatuan. Biaya karcis: Rp2.000 untuk pengendara roda dua, Rp5.000 untuk pengendara yang naik mobil..',
          url : "https://kabarwisata.com/wp-content/uploads/2017/07/air-terjun-tamalulu-waterfall.jpg",
          alamat: "Bontomanai, Rumbia, Kabupaten Jeneponto, Sulawesi Selatan 92371"
        },


        { name : 'Lembah Hijau Rumbia',
          lat  : -5.437402, 
          long : 119.876449, 
          description : 'Lembah Hijau Rumbia terletak di Dusun Boro, sekitar 27 kilometer dari Bontosunggu, ibukota Jeneponto. Kawasan ini memiliki nuansa sejuk karena lokasinya berada di atas ketinggian lebih dari 1000 mdpl. Namanya makin populer setelah pada tahun 2016 lalu, Satu Indonesia Award memberikan penghargaan sebagai pemenang kategori wisata berbasis lingkungan. Keunikan dari objek wisata ini adalah bangunannya yang menggunakan bambu sebagai bahan utama. Itulah mengapa Lembah Hijau Rumbia juga dikenal sebagai Kampung Bamboo oleh warga sekitar. Pohon yang menjulang tinggi serta tumbuhannya membuat pemandangannya terlihat lebih asri dan hijau. Eksotisme alamnya bikin kamu betah untuk tinggal lebih lama dan bernarsis ria disini. Hal yang menyenangkan dari Lembah Hijau Rumbia tak hanya pemandangannya. Pengelola juga sudah menyiapkan berbagai macam fasilitas agar pengunjung semakin betah. Tersedia aneka permainan seperti kolam renang, flying fox, dan outbound bagi orang dewasa maupun anak-anak. Selain itu ada juga vila, kafe, kios suvenir, dan kebun stroberi. Biaya masuk ke Lembah Hijau Rumbia sebesar Rp10.000 bagi orang dewasa dan Rp5.000 untuk anak-anak.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/11/Lembah-Hijau-Rumbia-image-source.jpg",
          alamat: "Tompobulu, Rumbia, Kabupaten Jeneponto, Sulawesi Selatan 92175"
        },


        { name : 'Pantai Karsut',
          lat  : -5.700883, 
          long : 119.783348, 
          description : 'pantai bagian selatan Sulsel menawarkan keindahan panorama alam yang beragam dan eksotis. Pantai Karsut di Jeneponto, salah satunya. Objek wisata ini memiliki hamparan pasir putih dengan debur ombak yang tenang. Bentang alam yang cukup landai memberi keleluasaan bermain di tepi pantai. Bermain pasir, berlarian, atau menyongsong datangnya  ombak  yang terhempas ke bibir pantai dapat dilakukan bersama keluarga dengan tenang.',
          url : "https://turatea.weebly.com/uploads/1/0/4/7/104734507/2016-03-20_orig.jpg.",
          alamat: "Kampala, Arungkeke, Kabupaten Jeneponto, Sulawesi Selatan 92361"
        },

        { name : 'Britaria Kassi',
          lat  : -5.624725, 
          long : 119.629935, 
          description : 'Salah satu pilihan lainnya ialah pemandian alam berjulukan Pemandian Birta Ria Kassi. Selain menikmati kolam renang, Anda sanggup menikmati indahnya pemandangan laut, pantai dan hutan. Objek Wisata Birta Ria Kassi terletak kampung Kassi, Kecamatan Binamu, Kabupaten Jeneponto. Sayangnya kondisi objek wisata ini tidak terkelola dengan baik. Makara tidak begitu direkomendasikan untuk dikunjungi.',
          url : "http://picture.triptrus.com/image/2014/06/pantai-birtaria-kassi.jpeg",
          alamat: "Tonro Kassi Barat, Tamalatea, Kabupaten Jeneponto, Sulawesi Selatan 92351"
        },


        { name : 'Pulau Libukang',
          lat  : -5.648953, 
          long : 119.597712, 
          description : 'Menelusuri keindahan dan keunikan Alam Butta Turatea, maka kita akan menyesal jika tidak menyempatkan diri untuk berkunjung ke Pulau Harapan. Pulau yang menyimpan sejumlah, misteri dan keindahan ini, memang pemandangannya masih alami dan asri, dengan pepohonan yang begitu rindang dan sejuk. Selain itu Penduduknya yang ramah dan akrab membawa kita Sejenak menghilangkan kepengatan, kejenuhan dan kesibukan yang setiap hari mewarnai, kehidupan. Pulau ini berpenduduk 116 jiwa yang terdiri dari 68 Kepala Keluarga yang menempati 58 rumah.',
          url : "https://turatea.weebly.com/uploads/1/0/4/7/104734507/dad_orig.jpg",
          alamat: "Bontorannu, Bangkala, Kabupaten Jeneponto, Sulawesi Selatan"
        },

      ]

    },


      {name :'Bantaeng',
      wisata :
      [

      { name : 'Pantai Seruni',
          lat  : -5.548421,
          long : 119.946271, 
          description : 'Satu lagi tawaran khas Wisata Bantaeng yakni pantai, yakni Pantai Seruni. Hampir serupa dengan pantai Marina dan pantai Losari di Makassar, Pantai Seruni sudah lama dikenal oleh warga Bantaeng namun pembangunan kawasan pantai sebagai kawasan wisata baru dilakukan beberapa tahun terakhir. Di Kawasan Wisata pantai Seruni, Bantaeng ini terdapat banyak penjual gorengan, minuman panas dan dingin, selain itu juga terdapat lintasan Jogging atau Jogging Path yang mengelilingi sebuah lapangan di Pantai Seruni. Orang-orang sangat ramai berdatangan pada sore hari hingga malam hanya untuk menghabiskan waktu bersama teman, keluarga dan juga kerabat sedangkan pada saat pagi hari dan minggu pagi Pantai Seruni di jadikan Jogging Spot dan Senam dari warga sekitar.',
          url : "https://3.bp.blogspot.com/-4f1uQGnbfcM/VvLmpiYq8PI/AAAAAAAAAQ8/Fm8Z9gt6r8wErwDcQF9QhPZGuSxG4zlxw/s1600/seruni.jpg",
          alamat: "Jl. Seruni, Pallantikang, Kec. Bantaeng, Kabupaten Bantaeng, Sulawesi Selatan 92451"
        },


        { name : 'Pantai Marina Bantaeng',
          lat : -5.584738, 
          long : 120.100293, 
          description : 'Pantai Marina adalah sebuah Kawasan Wisata Pantai yang baru dikelola oleh Pemerintah Daerah Kabupaten Bantaeng dan sementara dalam proses pembangunan, yang terletak diDusun Korong Batu, Desa Baruga ,Kecamatan Pa’jukukang ,Kabupaten Bantaeng, berjarak sekitar 7 kilometer dari Bulukumba, atau kurang lebih 12 kilometer dari kota Bantaeng. Memasuki gerbang yang bertuliskan Rest Area Marina Beach, yang pertama didapati adalah lapangan parkir yang luas, dan sebuah mesjid yang berdiri megah Masjid Pantai Marina Korong Batu .Selain untuk beribadah bagi pengunjung Pantai Marina, juga disiapkan untuk para pelintas dari dari berbagai daerah yang ingin beribadah. Masjid ini selain fasilitas ber-wudhu, juga dilengkapi fasilitas ganti pakaian dan Restoran, serta Pasar Tradisional Modern Pantai Marina yang menjual berbagai macam souvenir..',
          url : "http://cdn2.tstatic.net/kaltim/foto/bank/images/pantai-marina-bantaeng_20160320_011222.jpg",
          alamat: "Baruga, Pa'jukukang, Baruga, Pa'jukukang, Kabupaten Bantaeng, Sulawesi Selatan 92561"
        },


        { name : 'Mini Showfarm Bantaeng',
          lat : -5.442708,
          long : 119.924038, 
          description : 'Di Kabupaten Bantaeng, ada taman bunga yang memiliki beragam jenis bunga yang beraneka warna. Namun, untuk mengunjunginya, Anda harus melewati beberapa tanjakan, karena letaknya di daerah pegunungan. Taman itu bernama Mini Showfarm yang terletak di Desa Bonto Lojong, Kecamatan Ulu Ere, Kabupaten Bantaeng atau sekira 23 kilometer dari pusat kota Bantaeng. Untuk masuk ke taman bunga ini, Anda hanya merogoh kocek Rp5 ribu. Ada beragam bunga seperti dari tanaman lokal, di antaranya bunga masamba, berbagai jenis krisan, miana, berbagai warna bunga beras tumpah, mawar matador beragam warna, mawar macan, melati, kembang kertas.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/showfarm_20180114_121052.jpg",
          alamat: "Bonto Lojong, Uluere, Kabupaten Bantaeng, Sulawesi Selatan 92451"
        },


        { name : 'Loka Camp',
          lat : -5.452692, 
          long : 119.904157, 
          description : 'Loka Camp merupakan lokasi wisata alam bebas Pertama di Sulawesi Selatan. Bahkan lebih besar lagi, sesuai data tertulis yang dijadikan acuan Black Community and Black In News of Bonthain, Loka Camp menjadi yang pertama berkiprah di kawasan Indonesia Timur yang memulai debutnya sejak tahun 2000 silam. Fasilitas Resort berupa gedung penginapan bernuansa alam. Pengunjung dapat pula menggunakan tenda-tendaDome sebagai pengganti gedung serba mewah yang sudah lazim digunakan di kota.',
          url : "http://picture.triptrus.com/image/2014/06/loka-camp.jpeg",
          alamat: "Kampung Loka, Desa Bonto Marannu, Kecamatan Ulu Ere, Bonto Marannu, Bantaeng, Kabupaten Bantaeng, Sulawesi Selatan 92451"
        },


        { name : 'Air Terjun Bissappu',
          lat : -5.513788, 
          long : 119.910195, 
          description : 'Air terjun Bissapu hanya bisa anda temukan di Bantaeng yakni di desa Bonto Salluang, Kecamatan Bissappu, Kabupaten Bantaeng. Air terjun Bissappu bisa diakses dari kota Bantaeng selama 15 menit atau sekitar 5 km perjalanan. Air terjun Bissappu menyuguhkan panorama pegunungan yang hijau dan asri yang di tengahnya terdapat sebuah air terjun dari tebing dengan ketinggian 40 meter. Bunyi aliran air yang menghempas bebatuan bisa menjadi salah satu terapi untuk menghilangkan stress selama week day dan udara saja sejuk juga sangat baik mencuci paru-paru anda yang kotor dengan polusi kendaraan di perkotaan.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/desa-bonto-salluang_20160430_215438.jpg",
          alamat: "Bonto Salluang, Bissappu, Kabupaten Bantaeng, Sulawesi Selatan 92451"
        },


        { name : 'Permadian Alam Eremerasa',
          lat : -5.481966, 
          long : 120.00441, 
          description : 'Salah satu Ikon Kota Bantaeng yang sudah di kenal sejak lama yakni Ere Merasa. Ere Merasa adalah kolam permandian air yang sejak lama dijadikan tempat rekreasi warga sekitar. Hal yang unik dari kola mini adalah sumber air dari kolam yang berasal dari mata air alam yang muncul dari akar-akar pohon dan bebatuan. Pohon yang dialiri air pun sudha sangat tua dan kelihatan dari diameter batang pohon yang mencapai 3 meter. Pohon ini dijaga dari tangan-tangan jahil agar sumber air yang keluar terus mengalir.',
          url : "http://1.bp.blogspot.com/-ZhJIHNNH7Cs/T7Wyd26gdbI/AAAAAAAABxI/yOx4AGAuThM/s1600/DSC00188.JPG",
          alamat: "Kampala, Eremerasa, Kabupaten Bantaeng, Sulawesi Selatan 92415"
        },


        { name : 'Air Terjun Simoko',
          lat : -5.456707, 
          long : 120.014752, 
          description : 'Air Terjun Simoko terasa berbeda dengan air terjun lain yang juga berada di kota Berjuluk Butta Toa ini, sebab kondisi alamnya yang masih begitu asri. Air terjun setinggi 30 meter tersebut dikelilingi oleh pepohonan nan rimbun membuat pengunjung serasa sedang berada ditengah hutan. Air terjun dengan tinggi sekitar 50 meter ini merupakan destinasi pariwisata baru. Dengan jarak 20 Km dari ibu kota Bantaeng, objek wisata baru ini menjadi penarik kunjungan wisatawan setelah pemerintah daerah memperbaiki jalan menuju ke sana.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/air-terjun-478_20170122_191448.jpg",
          alamat: "Campaga, Tompobulu, Kabupaten Bantaeng, Sulawesi Selatan 92461"
        },


        { name : 'Pasar Lambocca',
          lat : -5.559428, 
          long : 120.000355, 
          description : 'Pasar Lamboca termasuk dalam kategori destinasi wisata baru yang merupakan pasar Tradisional Rakyat yang telah dilakukan peremajaan oleh pemerintah dan kerja sama salah satu Bank Nasional. Produknya tidak lain dari Argo wisata yang menjual kearifan lokal seperti kue kue tradisional seperti Belanda, Biji Nangka, Cucuru Bayao dan Kaloli. Anda juga bisa menikmati pemandangan petan rumput laut yang berakitifitas di pinggir pantai.',
          url : "https://lh3.googleusercontent.com/-EaXvuaTxlWA/WiD8BweeCHI/AAAAAAAAAFs/WRFR0SQFvH4Rrkl_nQLQ788gwUqqBQ3vgCHMYCw/s1600/WELoXFr3.jpeg",
          alamat: "Dusun Lambocca, Biangkeke, Pa'jukukang, Biangkeke, Pa'jukukang, Kabupaten Bantaeng, Sulawesi Selatan 92461"
        },

      ]
    },

      {name :'Bulukumba',
      wisata :
      [

    
        { name : 'Tebing Appalarang',
          lat  : -5.537494,
          long : 120.449696, 
          description : 'Objek wisata ini terletak di Desa Ara, Kecamatan Bontobahari. Di sini kamu tidak akan bertemu dengan keindahan pasir putih. Hanya ada jejeran tebing curam dan deburan ombak. Perpaduan itu justru membuatnya terlihat semakin eksotis. Cliff jumping menjadi kegiatan favorit para wisatawan, selain snorkeling tentunya.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/11/Keindahan-Pantai-Apparalang-image-source.jpg",
          alamat: "Ara, Bontobahari, Ara, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan"
        },


        { name : 'Pantai Bira',
          lat  : -5.614277, 
          long : 120.456693, 
          description : 'Pantai Bira memiliki hamparan pasir putih dan laut jernih yang memesona. Objek wisata ini tak pernah sepi dari pengunjung, baik lokal maupun mancanegara. Aktivitas seperti snorkeling dan diving pun sering dilakoni oleh wisatawan untuk menikmati keindahan bawah lautnya. Lokasinya berada di Kecamatan Bontobahari.',
          url : "https://services.sportourism.id/fileload/pantai-tanjung-birajpg-Wqnw.jpg?q=75",
          alamat: "Bira, Bonto Bahari, Bira, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },


        { name : 'Pantai Samboang',
          lat  : -5.488186,
          long : 120.443759,
          description : 'Keindahan pantai dan pasir putihnya juga bisa kamu nikmati di Pantai Samboang. Objek wisata ini terletak di Desa Eka Tiro. Di sini juga terdapat pulau kecil yang bisa dikunjungi melalui jembatan penghubung sepanjang 20 meter. Selain itu, objek wisata ini juga dilengkapi dengan berbagai fasilitas seperti penginapan ataupun rumah makan.',
          url : "https://ksmtour.com/media/images/articles13/pantai-samboang-sulawesi-selatan.jpg",
          alamat: "Samboang Lingk. Erelebu Timur Kel, Ekatiro, Bontotiro, Kabupaten Bulukumba, Sulawesi Selatan 92572"
        },


        { name : 'Pantai Marumasa',
          lat  : -5.575366,
          long : 120.459384, 
          description : 'Objek wisata ini terletak di Desa Darubiah, Kecamatan Bonto Bahari. Ada banyak spot selfie yang cocok untuk menghiasi profil Instagram kamu di sini. Garis pantai berwarna putih dan gradasi warna biru lautnya terlihat menawan. Keindahannya semakin lengkap dengan hadirnya dua buah tebing tinggi di sekitarnya.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/06/Keindahan-Pantai-Marumasa-dari-Atas-Tebing.jpg",
          alamat: "Darubiah, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },

        { name : 'Pantai Pulau Liukanglu',
          lat : -5.641677, 
          long : 120.434305, 
          description : 'Liukang Loe merupakan sebuah pulau kecil dan bisa dikunjungi dari Pantai Bira menggunakan perahu. Di sini terdapat pemukiman dengan warga yang ramah. Pemandangannya pun sangat memanjakan mata. Hamparan laut biru dan terumbu karang di bawahnya terlihat eksotis. Belum lagi ada sekelompok ikan kecil nan cantik yang turut meramaikan.',
          url : "https://www.indonesiakaya.com/uploads/_images_gallery/Penamaan_dari_Bahasa_Konjo_yang_berarti_Liu-Liukang_Kayu_Hitam_dan_Loe_Banyak.jpg",
          alamat: "Bira, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },


        { name : 'Pantai Pusahelu',
          lat  : -5.609744,
          long : 120.437832, 
          description : 'Objek wisata ini terletak di Desa Darubiah, tepatnya di belakang Pantai Bara. Masih banyak wisatawan yang belum tahu keberadaan pantai ini. Jadi, pemandangannya dijamin masih asri dan jauh dari campur tangan manusia. Hamparan pasir putihnya tak begitu luas, namun dikelilingi oleh tebing yang membuatnya terlihat lebih menawan. Selain itu, pemandangan bawah lautnya juga tak boleh dilewatkan.',
          url : "https://4.bp.blogspot.com/-bZ1ME83-J5Q/V16AF2B3gLI/AAAAAAAAB8g/67-0XexS91k2XRCbs8JpRn9tfmM17cOugCKgB/s1600/IMG_1327.JPG",
          alamat: "Darubiah, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },


        { name : 'Pantai Lemo-lemo',
          lat  : -5.584335, 
          long : 120.392787, 
          description : 'Surga bahari tersembunyi ini berada di Kelurahan Tanah Lemo, Kecamatan Bonto Bahari. Deretan pohon yang rindang memberikan rasa sejuk di tengah teriknya matahari. Pasir putih dan lautnya juga masih terlihat asri. Di sini juga terdapat sebuah gua yang di dalamnya terdapat air tawar nan jernih.',
          url : "http://2.bp.blogspot.com/-Jn12V9tIIzo/Vhy8EFzp2oI/AAAAAAAAAPo/4otqK-QaXLA/s1600/Pantai%2BLEmo.jpg",
          alamat: "Tanah Lemo, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },


        { name : 'Pulau Kambing',
          lat  : -5.641677,
          long : 120.434305, 
          description : 'Pulau Kambing menyuguhkan panorama bawah laut yang memukau. Di sini terdapat banyak gugusan terumbu karang yang indah. Gerombolan ikan kecil juga turut meramaikan dan membuat pemandangannya semakin menyenangkan. Objek wisata ini bisa dikunjungi dari Pantai Bira dengan perahu.',
          url : "https://www.indonesiakaya.com/uploads/_images_gallery/Biru_dan_jernihnya_air_laut_di_perairan_Pulau_Kambing.jpg",
          alamat: "Bira, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan"
        },


        { name : 'Bakung-Bakung View Sunrise',
          lat  : -5.514693,
          long : 120.43229, 
          description : 'Tak hanya di pantai, kamu juga bisa menikmati pemandangan matahari di Bakung-bakung View Sunrise. Objek wisata ini terletak di Desa Lembanna, Kecamatan Bontobahari. Di siang hari, hamparan hijaunya hutan dan birunya laut menjadi suguhan yang menyegarkan mata. Selain itu ada juga fasilitas lain seperti jogging track, gazebo, lapangan voli, dan lainnya.',
          url : "https://4.bp.blogspot.com/-c0HY41Tf-n0/V917sosyMhI/AAAAAAAAAA0/pSuZVqHheg8uV6BGA8P3fEHfm0oUa4tKQCLcB/s1600/FB_IMG_1473422901057.jpg",
          alamat: "Lembanna, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan"
        },


        { name : 'Pantai Bara',
          lat  : -5.608651,
          long : 120.438829, 
          description : 'Hamparan pasir putih dan birunya air laut membuat objek wisata ini terlihat eksotis. Beberapa wisatawan yang pernah ke sini pun sepakat kalau keindahannya melebihi saudara dekatnya, yaitu Pantai Bira. Selain itu, tempat ini belum banyak diketahui oleh banyak orang sehingga masih cukup sepi.',
          url : "https://c1.staticflickr.com/4/3919/15178636275_cc9d6bd005_b.jpg",
          alamat: "Pantai Bara, Kabupaten Bulukumba, Sulawesi Selatan 92571"
        },


        { name : 'Pantai Ujung Tiro',
          lat  : -5.476972,
          long : 120.45158, 
          description : 'Jika dilihat sekilas, Pantai Ujung Tiro memiliki banyak persamaan dengan Tanah Lot di Bali. Objek wisata yang terletak di Desa Eka Tiro ini menyuguhkan panorama bahari dengan air yang jernih serta tebing batu di sekitarnya. Ragam aktivitas pun bisa kamu lakukan di sini, seperti memancing, snorkeling, ataupun sekedar berswafoto.',
          url : "https://picture.triptrus.com/image/2018/03/pantai-ujung.jpeg",
          alamat: "Bontotiro, Kabupaten Bulukumba, Sulawesi Selatan 92572"
        },


        { name : 'Tanah Beru',
          lat  : -5.514594,
          long : 120.432312, 
          description : 'Bulukumba juga terkenal sebagai tempat pembuatan kapal pinisi. Jika kamu ingin melihat prosesnya, kunjungi saja Tana Beru. Tempatnya berlokasi di Kelurahan Tana beru. Harga kapal yang dibangun di sini bisa mencapai miliaran, loh. Di samping itu, kemegahannya cukup keren untuk dijadikan latar swafoto kamu..',
          url : "https://www.ngetren.co.id/wp-content/uploads/2017/07/tanah-beru.jpg",
          alamat: "Bonto Bahari, Bulukumba"
        },


        { name : 'Pantai Mandala Ria',
          lat  : -5.521086, 
          long : 120.447023, 
          description : 'Destinasi wisata ini terletak di Desa Lembanna, Kecamatan Bontobahari. Dinamakan demikian karena di sinilah Panglima Mandala memesan 24 kapal untuk misi pembebasan Irian Barat. Pemandangannya pun tak kalah dengan pantai lain di Bulukumba, dengan pasir putih dan laut biru nan jernih. Selain itu, ada banyak gua di sekitar yang bisa kamu jelajahi..',
          url : "http://titiw.com/wp-content/uploads/2016/09/Pantai-Mandala-Ria-1.jpg",
          alamat: "Lembanna, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan"
        },


        { name : 'Goa Passohara',
          lat  : -5.521881,
          long : 120.444917, 
          description : 'Gua Passohara berada di sekitar kawasan Pantai Mandala, tepatnya di Desa Lembanna. Medan perjalanannya cukup terjal dengan bebatuan licin sedalam 30 meter. Di ujung gua terdapat sumber mata air yang diperkirakan berumur ratusan tahun dan sering digunakan oleh warga sekitar. Objek wisata ini cukup minim untuk urusan pencahayaan, jadi jangan lupa membawa senter saat ke sini ya..',
          url : "http://3.bp.blogspot.com/-T2LD5ZcsqEA/VnEcnDn1TNI/AAAAAAAABkM/9f_SiDQ9qTA/s1600/12279178_10153698664409707_5304474277607384463_n.jpg",
          alamat: "Ara, Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan"
        },


        { name : 'Kawasan Adat Kajang Ammatoa',
          lat  : -5.321737, 
          long : 120.295856, 
          description : 'Warna hitam melekat dengan penduduk di desa ini. Bagi mereka, warna tersebut merupakan filosofi hidup. Saat masuk ke kawasan ini, kamu akan melihat panorama tanah bebatuan dan pohon yang rimbun. Bentuk rumahnya sama dan menghadap ke satu arah. Selain itu juga, kawasan ini tidak tersentuh dengan teknologi, bahkan listrik sekalipun. Desa ini juga sangat menjunjung tinggi etika kesopanan.',
          url : "http://1.bp.blogspot.com/-QdTosxvWc5I/VRC-IZdY69I/AAAAAAAAAC4/qRAlrs-1_Is/s1600/KAJANG22.jpg",
          alamat: "Tanah Toa, Kajang, Kabupaten Bulukumba, Sulawesi Selatan 92574"
        },

        { name : 'Woywoy Sunrise Bira',
          lat  : -5.609885,
          long : 120.467187, 
          description : 'Woy Woy Sunrise" memutuskan membuat resort ini dengan meminimalisir pemikiran orang yang selalu berpendapat bahwa Pantai Bira merupakan destinasi liburan yang overpriced dengan fasilitas seadanya. Kini, semua bisa datang dan menikmati indahnya sunrise dari "Woy Woy Sunrise" hanya dengan Rp. 500.000,-/ kamar. Tidak hanya menjual tampilan resort yang menarik, "Woy Woy Sunrise" memiliki fasilitas kolam renang dan private access ke pantai (di waktu tertentu) untuk pengunjung disana. Tidak perlu takut kelaparan, karena "Woy Woy Sunrise" memiliki resto yang menyajikan Indonesian Food dan yang tidak boleh dilupakan adalah tersedianya ayunan yg menyerupai hammock yang dapat digunakan untuk berjemur sekaligus melihat pemandangan pantai di depannya.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/05/Woy-Woy-Sunrise-Tanjung-Bira.jpg",
          alamat: "Bonto Bahari, Bulukumba Regency, South Sulawesi 92571 "
        },

        { name : 'Permandian Alam Limbua',
          lat  : -5.467521, 
          long : 120.426672, 
          description : 'Permandian ini terletak di ibukota Kecamatan Bonto Tiro. Permandian ini banyak dikunjungi oleh masyarakat setempat. Hal ini dihubungkan dengan kesaktian Dato Tiro, sehingga muncul anggapan bahwa dengan mandi dalam lokasi pemandian ini diyakini dapat menghilangkan semua penyakit kulit yang ada. Selain keindahan yang ada berupa keberadaan sumur yang arah aliran airnya memanjang sampai ke laut.',
          url : "http://i1096.photobucket.com/albums/g329/sanarief/Lain-lain/hilahila.jpg",
          alamat: "Ekatiro, Bontotiro, Kabupaten Bulukumba, Sulawesi Selatan"
        },

      ]

    },
    
      {name :'Selayar',
      wisata :
      [

        { name : 'Taka Bonerate',
          lat  : -6.230118, 
          long : 120.529323, 
          description : 'Topografi wilayahnya sangat unik dan menarik dijelajahi, di mana atol berupa gugusan pulau gosong karang beserta rataan terumbu membentuk deretan pulau-pulau unik. Di antara pulau gosong karang tersebut, terdapat beberapa selat sempit terjal dan cukup dalam. Sedangkan di bagian permukaan terumbu, ada beberapa kolam kecil yang dikelilingi terumbu karang.',
          url : "https://cdn.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Takabonerate-Pesona-Indonesia-fototrip-2.jpg",
          alamat: "Pulau Taka Bonerate, Kepulauan Selayar"
        },

        { name : 'Liang Kareta',
          lat  : -6.178607, 
          long : 120.42657, 
          description : 'Pantai Liang Kareta memiliki pasir putih yang membentang sekitar 300m dengan air laut jernih berwarna biru kehijau-hijauan. Kegiatan snorkeling dan diving menjadi daya tarik utama pantai ini, bahkan digunakan sebagai area pemancingan alternatif.',
          url : "http://ayokeselayar.com/wp-content/uploads/2014/09/Baloiya-Selayar.jpg",
          alamat: "Bontoborusu, Bontoharu, Kabupaten Selayar, Sulawesi Selatan 92855"
        },

        { name : 'Pantai batukarapu',
          lat  : -6.230894,
          long : 120.447015, 
          description : 'Pantai Batu Kerapu merupakan pantai berpasir putih dengan beberapa tebing dan tumbuhan sedang di sekitarnya. Air laut di sekitarnya pun sangat jernih, bahkan Nampak kebiru-biruan dengan pemandangan sunset yang menawan saat matahari tenggelam di sore hari. Uniknya, pantai ini memiliki batu berlubang menjorok ke laut, terlihat seperti Durdle Door yang ada di Inggris.',
          url : "https://1.bp.blogspot.com/-yAS40vna79o/Vwqc8WxR4VI/AAAAAAAAAHw/4YMfCZmUMVogS9J6dNIWHuhQ-EXpf77mg/s1600/FB_IMG_1460292010600.jpg ",
          alamat: "Lowa, Bontosikuyu, Kabupaten Selayar, Sulawesi Selatan 92855"
        },

        { name : 'Pantai Pa’badilang',
          lat  : -5.791133,
          long : 120.506986, 
          description : 'Pantai Pa’badilang memiliki topografi berbentuk tanjung dengan area berpasir putih di sebelah barat dan tebing karang di sisi timur. Pantai ini selalu ramai di hari libur, namun nampak sepi saat hari-hari biasa, cocok bagi wisatawan yang ingin bersantai, sekedar menikmati pemandangan berbeda di Selayar.',
          url : "http://ayokeselayar.com/wp-content/uploads/2015/01/pabadilang-selayar.jpg",
          alamat: "Kepulauan Selayar, Sulawesi Selatan"
        },

        { name : 'Pantai Baloyya',
          lat  : -6.205234, 
          long : 120.446118, 
          description : 'Pantai Baloiya terkenal dengan panorama indah serupa Tanah Lot di Bali. Uniknya, terdapat batu di tengah pantai menjadi daya pikat wisatawan untuk sekedar berselfie maupun berswafoto. Kegiatan berupa fishing, swimming, snorkeling, diving, hingga sunbathing kerap kali menjadi pilihan utama wisatawan saat jalan-jalan ke sini.',
          url : "https://www.kabarrantau.com/wp-content/uploads/2016/10/pantai-.jpg",
          alamat: "Bontotangnga, Bontoharu, Kabupaten Selayar, Sulawesi Selatan"
        },

        { name : 'Pantai Bahuluang',
          lat  : -6.230894, 
          long : 120.447015, 
          description : 'Pantai Bahuluang termasuk dalam jejerean spot diving dan snorkeling terbaik di Selayar. Sembari menanti sunset, kamu bisa menyusuri keindahan bawah laut dengan berjalan di atas gugusan batu karang.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/pulau-bahuluang-selayar_20170716_112954.jpg",
          alamat: "Appatanah, Bontosikuyu, Kepulauan Selayar, Sulawesi Selatan"
        },

        { name : 'Pantai Balojaha',
          lat  : -6.178607,
          long : 120.42657, 
          description : 'Pantai Balojaha  memiliki air laut jernih kebiruan dengan pasir putih halus menyerupai tepung. Destinasi ini termasuk dalam pantai paling rekomended untuk liburan keluarga di Selayar.',
          url : "https://pbs.twimg.com/media/C98Rl0EUIAUQAty.jpg",
          alamat: "Bontoborusu, Bontoharu, Kabupaten Selayar, Sulawesi Selatan 92855"
        },

        { name : 'Taman Mangrove Matalalang',
          lat  : -6.120147, 
          long : 120.456431, 
          description : 'Hutan Mangrove Matalalang rekomended dikunjungi saat matahari tak bersinar begitu terik, di pagi atau sore hari. Kamu bisa menapakkan kaki di atas jembatan yang membelah hamparan bakau, hingga menikmati pesona barisan pohon mangrove. Jika kamu beruntung warna jingga jelang matahari tenggelam di ufuk barat akan kamu dapatkan di sini. .',
          url : "http://merahnews.com/wp-content/uploads/2018/01/hsiahsia.jpg",
          alamat: "Jl. Poros Bandara H. Aroeppala, Bontotangnga, Bontoharu, Kepulauan Selayar, Sulawesi Selatan 92812"
        },

        { name : 'Bukit Pusera',
          lat  : -6.003056, 
          long : 120.551111, 
          description : 'Puncak Pusera merupakan area perbukitan indah dengan panorama laut di sebelah timur, memiliki cuaca sejuk, dan menjadi lokasi terbaik untuk camping ataupun sekedar hunting foto selfie. Destinasi ini sangat rekomended dikunjungi di malam hari.',
          url : "http://photos.wikimapia.org/p/00/05/96/07/51_big.jpg",
          alamat: "Bonea Makmur, Bontomanai, Kepulauan Selayar, Sulawesi Selatan"
        },

        { name : 'Museum Tandoang',
          lat  : -6.120147, 
          long : 120.456431, 
          description : 'Berkunjung ke Museum Tanadoang, seakan kita sedang menyusuri berbagai macam benda kuno yang berhubungan langsung dengan sejarah Kepulauan Selayar. Terdapat koleksi keramik masa lampau, miniatur kapal pinis, miniatur rumah adat, pakaian adat, mata uang, hingga senjata kerajaan.',
          url : "http://ayokeselayar.com/wp-content/uploads/2017/01/museum-tanadoang.jpg",
          alamat: "Bontobangung, Bontoharu, Kabupaten Selayar, Sulawesi Selatan 92812"
        },

        { name : 'Pantai Punagaan',
          lat  : -6.221172, 
          long : 120.526867, 
          description : 'Pantai Punagaan terletak di pesisir timur Selayar, berjarak sekitar 20 kilometer dari Kota Benteng. Objek wisata ini bisa diakses dengan baik meskipun terdapat pendakian di beberapa tempat. Suguhan utamanya merupakan hamparan air laut yang jernih dan jauh dari hiruk pikuk perkotaan.',
          url : "https://kabarwisata.com/wp-content/uploads/2017/07/pantai-punagaan.jpg",
          alamat: "Patilereng, Bontosikuyu, Kabupaten Selayar, Sulawesi Selatan 92855"
        },

      ]
    },

      {name :'Sinjai',
      wisata :
      [

      { name : 'Bukit Vandiam',
          lat  : -5.20975,  
          long : 120.291819, 
          description : 'Bukit Vandiam yang jaraknya hanya 12 kilometer dari Kecamatan Sinjai Utara, Ibukota Kabupaten Sinjai. Tempat wisata yang baru dibuka beberapa bulan lalu ini terletak di Jalan Poros Sinjai – Kajang, Kampung Dumme, Desa Sanjai, Kecamatan Sinjai Timur, Kabupaten Sinjai. Pengunjung hanya perlu berjalan kaki sekitar 200 meter dari jalan raya ke lokasi. Saat sampai, anda disuguhkan pemandangan eksotis berupa deretan pegunungan hijau Kabupaten Sinjai dan pemandangan laut lepas Teluk Bone. Selain itu, mata Anda juga akan dimanjakan keindahan gugusan Pulau Sembilan, salah satu kecamatan di Kabupaten Sinjai. Bukit yang punya ketinggian sekitar 500 mdpl ini hanya berjarak 2 kilometer dari bibir pantai. Di Bukit Vandiam, juga terdapat tempat duduk bagi Anda yang ingin lama-lama bersantai menikmati udara sejuk. Juga tersedia dua buah ayunan. Sensasi berayun di bukit ini tentu akan membuat Anda spot jantung karena letaknya di bibir jurang.',
          url : "http://rakyatku.com/images/Vandiam_diam_sinjai.jpg",
          alamat: "Panaikang, Sinjai Timur, Sanjai, Sinjai Tim., Kabupaten Sinjai, Sulawesi Selatan 92671"
        },

        { name : 'Bamboo Village',
          lat : -5.120374, 
          long : 120.240326, 
          description : 'Lokasi wisata ini berda di depan Kantor Bupati Sinjai, tepatnya di Lingk. Tanassang, Kel. Alehanuae, Kec. Sinjai Utara, Kab. Sinjai. Di lokasi tersebut pengunjung dapat menikmati panorama alam yang luas, pemandangan Kota Sinjai, Keindahan Laut, pesona Kecamatan Pulau Sembilan, Sun Rise, serta beberapa Spot yang lain dapat diabadikan. Hanya lima ribu rupaih untuk dua orang pengunjung, dan dapat menikmati pemandangan Kota Sinjai dari atas Bamboo Village  Tanassang dan buka setiap hari mulai pukul 07:00-18:00.',
          url : "https://nyero.id/wp-content/uploads/2018/03/Wisata-Hits-Bamboo-Village-Tanassang-Sinjai.png",
          alamat: "Alehanuae, Sinjai Utara, Kabupaten Sinjai, Sulawesi Selatan 92615"
        },

        { name : 'Air Terjun Pincuni',
          lat : -5.237035, 
          long : 120.000109, 
          description : 'Air Terjun pincuni terletak di jl.balakia tepatnya di kindang-kindang dan merupakan tempat yang paling menaraik yang di miliki sinjai barat,tempatnya sangat nyaman dan sejuk panorama alam yang masih tetata dengan alami menambah keindahan tempat tersebut.',
          url : "https://4.bp.blogspot.com/-rHl08R7U4WA/Vb8fRfrKkjI/AAAAAAAAACI/xHAYtmGK0LU/s1600/Foto%25281890%2529.jpg",
          alamat: "Balakia, Sinjai Bar., Kabupaten Sinjai, Sulawesi Selatan 92653"
        },

        { name : 'Air Terjun Barania',
          lat : -5.258992, 
          long : 120.00209, 
          description : 'Kawasan ini terletak di desa Barania Kec. Sinjai Barat pada jalur lintas Sinjai – Malino (Kab.Gowa). Selain itu kawasan Kec. Sinjai Barat yang memiliki keindahan alam pegunungan yang letaknya berada di kaki gunung Bawakaraeng dengan ketinggian 750 meter dpl. Disamping air terjun Barania Kec. Sinjai Barat yang terkenal dengan daerah pengembangan holtikultura memiliki banyak potensi wisata lainnya yang tak kalah menariknya, seperti perkebunan, pengolahan markisa segar, tanaman sayuran dan kopi arabika dan anda dapat pula menyaksikan acara ziarah ke kompleks makam raja-raja Turungeng,   makam Srikandi Balakia dan pusat pengembangan peternakan sapi perah.',
          url : "http://3.bp.blogspot.com/-su6IV0tOp2I/To5ySM_mrcI/AAAAAAAAApY/Uzt_6p5W-94/s1600/IMG_0142.JPG",
          alamat: "Bar., Barania, Sinjai Bar., Kabupaten Sinjai, Sulawesi Selatan 92653"
        },

        { name : 'Pulau Liang-Liang',
          lat : -5.051651, 
          long : 120.414157, 
          description : 'Pulau Liangliang berada di Kabupaten Sinjai, Provinsi Sulawesi Selatan. Nama pulau ini masih cukup asing terdengar di kalangan traveler. Padahal, Pulau Liangliang memiliki pesona yang tidak akan Anda temui di pulau lainnya. Di sekitar Pulau Liangliang terdapat beberapa gugusan pulau lainnya, seperti Pulau Burungloe, Pulau Sulawesi tepatnya Kabupaten Sinjai dan sebelah selatan terdapat kawasan Teluk Bone. Mengutip dari laman resmi Direktori Pulau-Pulau Kecil . Pulau Liangliang memiliki tingkat kemiringan sekira 30 derajat, tidak memiliki hamparan pantai, dan hanya ada pantai curam berbatu. Tapi bukan berarti Pulau Liangliang tidak memiliki keistimewaan untuk dikunjungi.',
          url : "https://img.ucweb.com/o/mediana/s/we_media/upload_img/17072115505e3052c86a2f7810111260d52cfd31adx700x393x45.jpeg;,70,jpeg;3,640x,0",
          alamat: "Pulau Harapan, Pulau Sembilan, Kabupaten Sinjai, Sulawesi Selatan 92616"
        },

        { name : 'Hutan Mangrove Tongke Tongke',
          lat : -5.150051, 
          long : 120.272013, 
          description : 'Terletak di desa Tongke-Tongke Kec. Sinjai Timur sekitar 7 km dari pusat kota Sinjai. Hutan bakau (mangrove) di Tongke-Tongke dalam perkembangannya telah menjadi obyek wisata yang ramai dan diminati, baik oleh wisatawan nusantara mauoun mencanegara, terutama sekali oleh para ilmuan yang gemar melakukan penelitian. Desa Tongke-Tongke dengan kekayaan hutan bakaunya dijuluki sebagai laboratorium bakau Sulawesi Selata. Pengembangan hutan bakau yang berlokasi pada pesisir sebelah timur kota Sinjaitersebut memiliki luas kurang lebih 786 ha, yang dikembangkan melalui swadaya masyarakat murni. Berkunjung di hutan bakau Tongke-Tongke berarti juga akan dihibur oleh aneka jenis bebunyian dan pekikan satwa dipagihari dan kepakan sayap ribuan kalelawar, yang bergantungan di atas pepohonan bakau pada siang hari.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/tongke-5_20160425_203817.jpg",
          alamat: "Tongke-Tongke, Sinjai Tim., Kabupaten Sinjai, Sulawesi Selatan"
        },

      ]
    },


      {name :'Bone',
      wisata :
      [

      { name : 'Puncak Padel',
          lat : -4.654214, 
          long : 120.183464, 
          description : 'Puncak Padel merupakan salah satu destinasi wisata yang menyajikan pemandangan pegunungan yang indah di Desa Pattimpa Kecamatan Ponre Kabupaten Bone. Tempat wisata ini sudah mulai ramai dikunjungi oleh masyarakat setempat maupun masyarakat luar daerah. Saat kami berkunjung ke lokasi wisata tersebut, terlihat beberapa pengunjung menikmati keindahan pemandangan pegunungan sambil mengabadikannya dengan berfoto. Salah satu pemuda yang tinggal di desa tersebut mengungkapkan bahwa destinasi wisata ini merupakan hasil kreativitas para pemuda yang ada di desanya, adapun tempat berfoto dan tempat nongkrong untuk pengunjung dibangun oleh pemuda-pemuda sendiri.',
          url : "https://nyero.id/wp-content/uploads/2018/02/Wisata-Hits-Puncak-Padel-Bone.png",
          alamat: "poleonro, Ponre, Kabupaten Bone, Sulawesi Selatan 92765"
        },

        { name : 'Puncak Lima Jari',
          lat : -4.62894, 
          long : 120.21781, 
          description : 'Desa Pattimpa, Kecamatan Ponre, Kabupaten Bone memiliki kawasan destinasi wisata alam yang baru. Dinamakan wisata Puncak Petta Makkita Walie. Destinasi agro wisata alam puncak itu juga lazim disebut puncak lima jari karena spot menyerupai lima jari-jari. Adapaun biaya parkir untuk pemeliharaan kawasan wisata itu hanya Rp 2.000 per motor dan Rp 5.000 untuk mobil.',
          url : "https://1.bp.blogspot.com/-TWpJWRUf-R8/WjXnCpGcCFI/AAAAAAAAGNA/aqTdfXt3qCAi7e83GTpvDxhC6oPlpY3oQCLcBGAs/s1600/24254220_357431448001373_8615121495699488768_n.jpg",
          alamat: "Pattimpa, Ponre, Kabupaten Bone, Sulawesi Selatan 92772"
        },

        { name : 'Pantai Tete',
          lat : -4.946346, 
          long : 120.296285, 
          description : 'Pantai Tete terletak dibagian selatan Bone sekitan 61 km dari pusat kota Watampone. Tepatnya di desa Bone Pute kecamatan Tonra. Masuk melalui desa Gareccing sekitar 3 km dari jalan poros Bone Sinjai. Sebenarnya pantai Tete selain tempat rekreasi juga merupakan Pusat Pelatihan bagi para Prajurit baru TNI..',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/pantai-tete-bone2_20160821_234634.jpg",
          alamat: "Cingkang, Barebbo, Kabupaten Bone, Sulawesi Selatan 92771"
        },

        { name : 'Waterpark Tanjung Palette',
          lat : -4.487545, 
          long : 120.37216, 
          description : 'Di tempat ini,Anda tidak disuguhi hamparan pasir putih yang indah, melainkan berupa pantai karang yang terjal. Disinilah letak keindahannya, dimana Anda bisa menikmati pemandangan bukit karang, deburan ombak serta hembusan angin pantai. Selain itu, Anda juga bisa menikmati aktifitas nelayan, petani rumput laut bahkan dari tempat ini Anda bisa melihat dari jauh pelabuhan Bajoe yang panjangnya 3 km menjorok ke laut. Selain wisata pantai, di Pallette ini juga terdapat permandian kolam renang yang cukup luas ukurannya namun terletak berjauhan dari pinggir pantai..',
          url : "https://3.bp.blogspot.com/-kcAB4FETihM/WiOo_L4xy2I/AAAAAAAATZw/x7Bss0TG-Ng-eTMSjjZVHazNrlLKe_tnQCLcBGAs/s1600/88874335-09b6-4a90-9ee8-8d0370b82e5f.jpg",
          alamat: "Pallette, Tim., Pallette, Tanete Riattang Tim., Kabupaten Bone, Sulawesi Selatan"
        },

      ]
    },

      {name :'Maros',
      wisata :
      [ 

      { name : 'Rammang-rammang',
          lat  :-4.924378,
          long : 119.600319, 
          description : 'Kawasan karst Maros kaya akan potensi alam, keanekaragaman hayati, dan budaya. Potensi alam adalah keindahan panorama alami perbukitan dan potensi speologi berupa sebaran gua-gua alam yang eksotik dan unik. Diketahui bahwa gua terdalam dan terpanjang di Indonesia berada dikawasan ini, yaitu Leang Leapute (kedalaman 260 meter) dan Leang Salukkang Kallang (panjang 12.463 meter).',
          url : "https://tendon.id/blog/wp-content/uploads/2017/06/Bosan-Climbing-di-Pegunungan-Karst-Trekking-Yuk-Tengok-Saja-Karst-Rammang-Rammang-Maros.jpg",
          alamat: "Desa Salendrang, Bontonlempangan, Bontoa, Bontonlempangan, Bontoa, Kabupaten Maros, Sulawesi Selatan 90554"
        },


        { name : 'Taman Wisata Leang Leang',
          lat  : -4.97834, 
          long : 119.673908, 
          description : 'Taman Prasejarah Leang-Leang terletak pada deretan bukit kapur/karts yang curam di kelurahan kalabbirang Kecamatan bantimurung. Lokasinya dapat ditempuh sekitar 15-30 menit dari Bantimurung. Para arkeolog berpendapat bahwa beberpa goa yang terdapat di sekitar kawasan tersebut pernah dihuni manusia sekitar 3000-8000 tahun SM bukti keberadaan ini ditandai dengan lukisan prasejarah berupa gambar babi rusa yang sedang melompat, puluhan gambar telapak tangan yang ada pada dinding-dinding goa. Selain lukisan prasejarah, juga terdapat benda-benda laut yang menandakan bahwa daerah tersebut juga pernah terendam air laut.',
          url : "https://asset.kompas.com/data/photo/2014/03/11/1400051leang-1780x390.jpg",
          alamat: "Leang-Leang, Bantimurung, Kabupaten Maros, Sulawesi Selatan 90561"
        },


        { name : 'Bantimurung',
          lat  : -4.972899, 
          long :  119.684681, 
          description : 'Obyek wisata alam Bantimurung adalah salah satu obyek wisata alam Kabupaten Maros yang terletak di Kelurahan Kalabbirang Kecamatan bantimurung dan terletak di lembah bukit kapur/karst yang curam dengan vegetasi tropis yang subur sehingga selain memiliki air terjun juga menjadi habitat kupu-kupu, burung dan serangga langka. Ditahun 1856-1857 seorang naturalis Inggris yang terkemuka bernama “Alfred Russel Wallace” menghabiskan sebagian hidupnya di kawasan ini untuk menikmati dan meneliti 150 spesies kupu-kupu yang terbilang langka dan tidak dijumpai di daerah lain seperti spesies Papilio Androcles. Lokasi Obyek wisata ini dari Makassar jaraknya 40 km dengan waktu tempuh sekira 1 jam berkendara. Setiap tahunnya ratusan ribu wisatawan dari mancanegara dan Nusantara mengunjungi obyek wisata ini..',
          url : "https://www.sumber.com/images/jalan-jalan-kuliner/Budaya/Sulawesi_Selatan/Taman_Nasional_Bantimurung.jpg",
          alamat: "Jln. Poros Maros-Bone Km.12, Kalabbirang, Bantimurung, Kalabbirang, Bantimurung, Kabupaten Maros, Sulawesi Selatan 90561"
        },


        { name : 'Air terjun lengan',
          lat  : -5.068851, 
          long : 119.789543, 
          description : 'Air Terjun Lengang Laiya dinamakan demikan karena letaknya yang berada di Desa Laiya, yakni perkampungan yang terbentuk akibat pertemuan tempat persinggahan gerilya di zaman dahulu. Yang membuat air terjun ini lebih menarik adalah medan yang dilalui serta keindahan sepanjang jalan menuju air terjun tersebut. Jalan berbatu dibungkus dengan tanah liat, juga tanjakan-tanjakan serta tikukangan-tikungan tajam menambah daya berpetulang tempat tersebut.',
          url : "https://4.bp.blogspot.com/-2SOSRyrGMZc/V1Edznh4ibI/AAAAAAAAFts/fjSC9qYYCJcgvtFoJ5rwcGcf9_eLB-y5gCLcB/s1600/Air%2BTerjun%2BLengang%2BLaiya%2B1.jpg",
          alamat: "Laiya, Cenrana, Kabupaten Maros, Sulawesi Selatan 92754"
        },


        { name : 'Air terjun bontosomba',
          lat  : -5.145703,
          long :  119.779823, 
          description : 'Air Terjun Bonto Somba Bonto Samba adalah salah satu desa yang terletak di kaki gunung pada ketinggian 300 meter dari permukaan laut. Desa ini berbatasan langsung dengan kawasan objek wisata Malino Kabupaten Gowa. Air terjun yang mengalir dari pegunungan serta kondisi alam tropis yang sejuk dan tanahnya yang subur sangat cocok untuk pengembangan wisata.',
          url : "https://4.bp.blogspot.com/-AWechiMzicg/WGFATSGiE0I/AAAAAAAAAcc/lgtR1KDarZA7vbxovcq7-n3HxsHitKvrgCLcB/s1600/bonto%2Bsomba.jpg",
          alamat: "Desa Bontomanurung, Kecamatan Tompobulu, Bonto Somba, Tompu Bulu, Kabupaten Maros, Sulawesi Selatan 90561"
        },


        { name : 'Pantai Kuri',
          lat  : -5.02924, 
          long : 119.467317, 
          description : 'Pantai Kuri adalah Pantai yang dapat dijadikan destinasi wisata pada saat anda berlibur dengan keluarga ataupun teman, karena di pantai kuri ini anda bisa menjumpai hamparan pasir putih yang sangat luas, selain itu anda juga bisa menjumpai udara segar yang ada di hutan mangroove yang ada di daerah sekitar pantai kuri. Pantai Kuri terletak di Desa Nisombalia Kec.Marusu, Kab. Maros, Provinsi Sulawesi Selatan, Indonesia.',
          url : "http://3.bp.blogspot.com/-VX6o0d_CA3g/VP5NxCGsZ7I/AAAAAAAADzk/bCQgMjruBqA/s1600/Pasir%2BPutih%2BPantai%2BKuri.jpg",
          alamat: "Jl. Kuri Pattene, Nisombalia, Marusu, Nisombalia, Marusu, Kabupaten Maros, Sulawesi Selatan 90552"
        },

      ]

    },

      {name :'Pangkep',
      wisata : 
      [ 

      { name : 'Pulau Pannambungan',
          lat  : -4.945376, 
          long : 119.399793, 
          description : 'Pulau Panambungan Lokasi kec. Liukang Tupabiring di Kabupaten Pangkajene Kepulauan adalah salah satu gugusan Kepulauan Spermonde, melalui sungai dan laut dengan perahu motor dan speed boat dari Pangkajene dan Makassar. Sangat mudah untuk menuju Pulau ini dan telah tersedia transportasi dengan waktu tempuh kurang lebih 1.30 ( satu setengah) jam dari Pangkajene. dan Makassar dengan Perahu motor. dan 30 menit dengan speed boat.',
          url : "http://4.bp.blogspot.com/-65bDu54jakE/VksVguODN8I/AAAAAAAADZo/-zjJKh6Vlj4/s1600/BLOGKATAHATIKU-PANAMBUNGAN.jpg",
          alamat: "kec. Liukang Tupabiring di Kabupaten Pangkajene"
        },


        { name : 'Permandian mattampa',
          lat  : -4.806588, 
          long : 119.54249, 
          description : 'Nah lokasi ini sangat paling terkenal, banyak pengunjung yang mendatangi tempat wisata ini, terlebih jikalau hari liburan, permandain ini boleh dikata memiliki fasilitas lengkap, mulai dari wahana bermain, kolam renang untuk dewasa dan anak-anak. Lumayan murah untuk wisata air dengan seluncuran yang menguji adrenalin. Pemandian Mattampa terletak di pinggir jalan poros Kabupaten Pangkep, lokasinya sekitar 60 km dari kota Makassar dan dapat ditempuh selama 1 sampai 2 jam menggunakan kendaraan roda dua atau roda empat..',
          url : "http://i0.wp.com/www.teruskan.com/wp-content/uploads/2013/01/dufan-mattampa.jpg?resize=550%2C350",
          alamat: "kp matampa pangkep, Jl. Poros Makassar-Maros, Samalewa, Bungoro, Kabupaten Pangkajene Dan Kepulauan, Sulawesi Selatan 90617"
        },


        { name : 'Pulau Camba-Cambang',
          lat  : -4.769332, 
          long : 119.490074, 
          description : 'Pulau Camba-cambang salah satu pulau terdekat dari Kabupaten Pangkep. saat ini pulau Camba-Cambang memiliki 11 unit tempat penginapan kecil, Akses menuju pulau Camba-Cambang juga terbilang mudah dan cukup murah. Pengunjung yang ingin berwisata ke Camba-Cambang bisa mengakses dari dermaga Maccini Baji Labakkang. Dari sana, pengunjung bisa menyewa perahu-perahu masyarakat seharga Rp. 150.000/kapal dengan jarak tempuh 10 – 15 menit serta biaya masuk pulau Camba-Cambang sebesar Rp. 10.000/orang.',
          url : "http://rakyatku.com/images/cam_cambang1.jpg",
          alamat: "Labakkang, Kabupaten Pangkajene Dan Kepulauan, Sulawesi Selatan"
        },


        { name : 'Wisata Leang Lonrong',
          lat  : -4.884418, 
          long : 119.623458, 
          description : 'Leang Lonrong merupakan gua alam di dalam gua terdapat sungai bawah tanah yang keluar melalui mulut gua leang lonrong dengan debit air cukup stabil sepanjang tahun, gua ini cukup panjang dan luas. Selain sebagai tempat wisata tirta, air yang keluar dari dalam gua dimanfaatkan oleh masyarakat sekitar gua dan PT. Semen Tonasa dalam memnuhi kebutuhan air bersih..',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/leang-lonrong-pangkep_20160131_165149.jpg",
          alamat: "Panaikang, Minasatene, Kabupaten Pangkajene Dan Kepulauan, Sulawesi Selatan 90661"
        },


        { name : 'Bulu Sorongan',
          lat  : -4.642017, 
          long : 119.628876, 
          description : 'Bukit Sorongan berketinggian kurang Lebih 730 mpdl, bukit ini terletak di Kabupaten Pangkep, Kecamatan Segeri, Desa Parenreng. Akses kesana Pangkep – Segeri – Desa Parenreng. Dari kota Pangkep menuju Segeri dapat ditempuh menggunakan motor, jarak tempuh sekitar 30 menit menuju Desa Parenreng.',
          url : "https://rudyrustam.files.wordpress.com/2015/06/mg_3941.jpg",
          alamat: "Desa Parenreng, Segeri, Benteng, Mandalle, Kabupaten Pangkajene Dan Kepulauan, Sulawesi Selatan 90762"
        },

      ]

    },

      {name :'Barru',
      wisata : 
      [

      { name : 'Celebes canyon',
          lat  : -4.500848, 
          long : 119.716305, 
          description : 'Terletak di Dusun Watu, Desa Libureng, Kecamatan Tanete Riaja. Celebes Canyon punya keindahan alam yang menakjubkan. Paduan keindahan batu karst putih dan desiran Sungai Ule’ yang mengalir disela karst, menjadikan tempat ini selalu ramai dikunjungi saat libur lebaran. Airnya jernih dan segar. Kalian yang hobby bermain air tentu bakal betah berlama-lama ditempat ini.',
          url : "https://services.sportourism.id/fileload/wisata-alam-celebes-canyon-sulawesi-selatan-2jpg-ugab.jpg",
          alamat: "Libureng, Tanete Riaja, Kabupaten Barru, Sulawesi Selatan 90762"
        },


        { name : 'Pulau Duttungan',
          lat  : -4.181759, 
          long : 119.625242, 
          description : 'Bagi yang menyukai liburan dengan nuansa pulau, kalian bisa menjajal Pulau Dutungan. Pulau ini terletak di Palanro, Kecamatan Mallusetasi. Pulau Dutungan memiliki keindahan pasir putih dan pesona bawah laut yang sangat indah. Banyaknya pepohonan rindang tumbuh di tepi pantai membuat hawanya cukup sejuk. Berlibur ke pulau ini, kalian cukup merogoh kocek Rp.50 ribu untuk biaya transportasi penyeberangan antar-jemput dan tiket masuk Pulau Dutungan. Selain itu, bagi pengunjung yang ingin menginap, Pulau Dutungan menyediakan resort dengan harga terjangkau.',
          url : "http://2.bp.blogspot.com/-0sD4IJDd3F0/VQBQny_QL9I/AAAAAAAAD28/tKpq7muEqfo/s1600/Pulau%2BDutungan.jpg",
          alamat: "Cilellang, Mallusetasi, Kabupaten Barru, Sulawesi Selatan"
        },


        { name : 'Pantai Ujung Batu',
          lat  : -4.40756, 
          long : 119.601772, 
          description : 'Salah satu primadona wisata di Barru yaitu Pantai Ujung Batu. Pantai ini terletak di Sumpang Binangae, Kecamatan Barru. Lokasinya yang strategis membuat Pantai Ujung Batu jadi serbuan pengunjung saat libur lebaran. Biaya tiket masuk tergolong ekonomis yakni sebesar Rp.3 ribu rupiah. Pantai Ujung Batu juga menawarkan pemandangan yang tak kalah menarik. Banyak spot foto yang bisa dijadikan pengunjung sebagai latar keren buat berselfie ria.',
          url : "http://blog.djarumbeasiswaplus.org/ekadesysaputri/files/2012/08/photo02661.jpg",
          alamat: "Jl. Ladullah, Sumpang Binangae, Kec. Barru, Kabupaten Barru, Sulawesi Selatan 90712"
        },


        { name : 'Air Terjun Waesai',
          lat  : -4.553987, 
          long : 119.747234, 
          description : 'Dijuluki air terjun pelangi abadi, membuat Air Terjun Waesai wajib untuk kalian kunjungi. Lokasinya berada di Lomporiaja, Kecamatan Tanete Riaja. Air terjun Waesai memiliki ketinggian tebing 25 meter. Menikmati kucuran airnya yang segar akan membuat pikiran tenang dan semangat pulih kembali. Lokasi Air Terjun Waesai terbilang cukup menantang karena terletak di pedalaman dan jauh dari keramaian kota, namun saat libur lebaran objek wisata Air Terjun Waesai ini tak pernah sepi..',
          url : "https://ksmtour.com/media/images/articles4/air_terjun_wae_sai.jpg",
          alamat: "Lompo Riaja, Tanete Riaja, Kabupaten Barru, Sulawesi Selatan 90762"
        },


        { name : 'Air Terjun Sarang Burung',
          lat  : -4.362903, 
          long : 119.684625, 
          description : 'Jika anda termasuk pecinta wisata alam, dan menyukai  travelling, jangan lewatkan destinasi wisata air terjun yang berada di Dusun Batulappa, Desa Tompo, Kecamatan Barru, Kabupaten Barru, Sulawesi Selatan. Air terjun ini dinamai Sarang Burung oleh warga sekitar. Mungkin karena tempat ini diiringi oleh kicauan burung di sepanjang jalan hingga sampai di  lokasi air terjun. Wisata yang satu ini memang agak sulit dijangkau karena jaraknya cukup jauh. Pengunjung harus berjalan kaki sekitar 1 kilometer dan menapaki akses jalan yang cukup terjal dan menanjak. Namun pemandangan air terjun yang menawan membuat anda tidak akan menyesal mengunjungi tempat ini. Airnya yang sejuk, pemandangan lapisan batuan yang elok, angin sepoi yang berhembus ditambah kicauan burung yang menenangkan. Uniknya air terjunnya tidak hanya 1 tapi 7 tingkat. Jarak air terjun antara 1 dengan yang lain berkisar 100 meteran..',
          url : "http://4.bp.blogspot.com/-S4aPvZdvkcs/VX93CCiUQgI/AAAAAAAAE4c/LtxQ2mmFuqY/s1600/Air%2BTerjun%2BBatulappa%2BBarru%2B1.jpg",
          alamat: "Binuang, Balusu, Kabupaten Barru, Sulawesi Selatan 90762"
        },


        { name : 'Pulau pannikiang',
          lat  : -4.377829, 
          long : 119.61368, 
          description : 'Pulau ini terletak di Desa Madello, kec.Balusu sekitar 15 kilometer dari pusat kota Barru. Untuk mencapai pulau ini kamu bisa menyewa perahu para nelayan di pesisir pantai Takkalasi ataupun pesisir pantai Madello. Nama pulau ini sejatinya berasal dari kata Panning (Kelelawar). Ya, pulau ini memang dipenuhi dengan hewan ini. Tidak hanya kelelawar, masih banyak spesies burung lainnya yang menetap di pulau eksotis ini. Keberadaan beberapa spesies hewan di pulau Pannikiang merupakan keunikan tersendiri. Wisatawan juga akan disuguhi deretan pegunungan Lavanchu yang melengkapi eksotisme pulau berbentuk S ini.',
          url : "http://dispar.barrukab.go.id/wp-content/uploads/2017/10/1145B1A3-24C0-48D6-BA46-57DDF55A4C84.jpeg",
          alamat: "Pulau Pannikiang, Madello, Balusu, Kabupaten Barru, Sulawesi Selatan"
        },

      ]

    },


      {name :'Pare-Pare',
      wisata : 
      [

      { name : 'Pales teduh',
          lat  : -4.02733, 
          long : 119.639543, 
          description : 'Pales Teduh yang terletak Di Jalan Kelapa Gading, Kelurahan Bumi Harapan Kecamatan Bacukiki Barat Kota Parepare. Cafe ini terbilang baru dalam dunia kuliner Kota Bandar Madani. Tepatnya pada pertengahan April 2017. Sejak soft launching, cafe ini sudah ramai diserbu oleh berbagai kalangan. Yup, karena konsepnya memang beda dari cafe lain yang ada di Parepare. Pales Teduh Cafe, berasal dari kata “Pales” merupakan owner cafe ini sedangkan “Teduh” adalah sebuah konsep yang diusung yaitu nuansa keteduhan. Mengapa teduh? Karena bangunan cafe ini terdiri dari rumah pohon mengelilingi berbagai jenis pohon besar yang ada pada lokasi cafe. Sangat alami, menyatu dengan alam.',
          url : "https://cdn-az.allevents.in/banners/a5f326138e90ccf8b8e6a4f90fcce78f",
          alamat: "Jalan Bambu Runcing, Bumi Harapan, Bacukiki Barat, Bumi Harapan, Bacukiki Bar., Kota Pare-Pare, Sulawesi Selatan 91121"
        },


        { name : 'Taman Mattirotasi',
          lat  : -4.019373, 
          long : 119.622399, 
          description : 'Menelusuri Kota Pare-Pare tidak salah jika kita berkunjung ke Taman Mattirotasi. Taman ini berada di Jalan Mattirotasi dan berada di tepi pantai. Taman Mattirotasi memiliki garis pantai yang cukup panjang. Pada saat menjelang sore, taman ini cukup ramai oleh para pengunjung yang ingin menikmati merah mengkilau matahari terbenam. Di Taman ini juga sudah tersedia barisan Gazebo yang dapat digunakan para pengunjung untuk duduk-duduk menikmati matahari terbenam.',
          url : "https://pbs.twimg.com/media/Bt42wfUCAAAqLJF.jpg",
          alamat: "Kp. Baru, Bacukiki Bar., Kota Pare-Pare, Sulawesi Selatan"
        },


        { name : 'Tonrangeng River Side',
          lat  : -4.047567, 
          long : 119.625867, 
          description : 'Ada dua konsep utama yang sangat menonjol yaitu Tonrangen Riverside sebagai pendukung dari lahirnya rumah sakit Medical Tourism, lalu di sisi selatannya akan ada ruang hijau dan sisi utara nanti akan ada fasilitas wisata kuliner tradisional dengan menghadirkan juga restoran terapung seperti yang banyak terdapat di pulau Jawa.',
          url : "http://rakyatsulsel.com/library/themes/rasulnews/tum.php?src=http://rakyatsulsel.com/media/upload/2017/02/IMG20170211192436.jpg&w=620&h=354",
          alamat: "Lumpue, Bacukiki Bar., Kota Pare-Pare, Sulawesi Selatan 91123"
        },


        { name : 'Monumen Habibie&Ainun',
          lat  : -4.012644, 
          long : 119.621915, 
          description : 'Monumen Cinta Sejati Habibie Ainun merupakan monumen yang terletak di Parepare, Sulawesi Selatan. Monumen Cinta Sejati ini, dibuat untuk mengenang cinta Presiden ketiga Republik Indonesia Bacharuddin Jusuf Habibie kepada istrinya Hasri Ainun Besari, dan untuk menginspirasi warga Parepare. Selain itu Monumen Cinta sejati Ainun Habibie, ini adalah kado Pernikahan untuk Habibie di hari ulang tahun pernikahannya dengan Ibu Ainun. Peresmian Monumen Cinta Sejati Habibie-Ainun ini bertepatan dengan peringatan hari ulang tahun pernikahan Habibie dan Ainun yang ke-53.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/11/Monumen-Habibie-Ainun-image-source.jpg",
          alamat: "Lapangan Andi Makkasau, Jl. Karaeng Burane, Mallusetasi, Ujung, Kota Pare-Pare, Sulawesi Selatan 91111"
        },


        { name : 'Taman Syariah',
          lat  : -4.011429, 
          long : 119.625433, 
          description : 'Pemerintah kota Parepare telah membangun sebuah wisata dengan konsep Islami bernama Taman Syariah. Meski belum rampung sepenuhnya, taman yang dibangun di samping Kompleks Kantor Dinas Kota Parepare ini hadir sebagai pilihan wisata baru bagi masyarakat setempat. Tampak di tengah taman dibuatkan tugu yang dihiasi lafadz Allah dengan perpaduan air mancur. Selain itu, taman yang diperuntuhkan sebagai tempat bersantai khususnya jamaah yang hendak salat di masjid dekat taman didominasi dengan warna hijau. Tanamannya pun selain rerumputan juga ditanami pohon kurma.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/dibangun-di-samping-kompleks-ka_20170129_201646.jpg",
          alamat: "Jl. Ganggawa, Ujung Sabbang, Ujung, Kota Pare-Pare, Sulawesi Selatan 91114"
        },


        { name : 'Kebun Raya Jompie',
          lat  : -3.99678, 
          long : 119.639175, 
          description : 'Pemerintah kota Parepare telah membangun sebuah wisata dengan konsep Islami bernama Taman Syariah. Meski belum rampung sepenuhnya, taman yang dibangun di samping Kompleks Kantor Dinas Kota Parepare ini hadir sebagai pilihan wisata baru bagi masyarakat setempat. Tampak di tengah taman dibuatkan tugu yang dihiasi lafadz Allah dengan perpaduan air mancur. Selain itu, taman yang diperuntuhkan sebagai tempat bersantai khususnya jamaah yang hendak salat di masjid dekat taman didominasi dengan warna hijau. Tanamannya pun selain rerumputan juga ditanami pohon kurma.',
          url : "http://blog.reservasi.com/wp-content/uploads/2017/01/kebun-raya-jompie-2.png",
          alamat: "Bukit Harapan, Soreang, Kota Pare-Pare, Sulawesi Selatan 91131"
        },


        { name : 'Pantai Tonrangeng',
          lat  : -4.002669, 
          long : 119.621218, 
          description : 'Pantai Tonrangeng merupakan satu dari sekian banyak wisata pantai yang ada di Sulawesi Selatan. Wisata pantai ini memiliki pemandangan yang indah. Pasirnya berwarna putih bersih membuat pantai ini memiliki pemandangan yang menawan. Selain itu, airnya yang jernih membuat pantai ini semakin menarik untuk dikunjungi.',
          url : "https://4.bp.blogspot.com/-k0QT4upC3wI/WiOvumOqYlI/AAAAAAAAAzo/buAgmrIwxMYZGCiNM5O60zBWyJmOfLeEwCLcBGAs/s1600/image1%2B%25285%2529.JPG",
          alamat: "Makassar - Pare-Pare, Ujung Sabbang, Ujung, Pare-Pare City, South Sulawesi"
        },


        { name : 'Pantai Lumpue',
          lat  : -4.057939, 
          long : 119.623135, 
          description : 'Pantai Lumpue memiliki keindahan panorama alam yang sangat menakjubkan. Pantai Indah ini di hiasi oleh pasir nan halus serta kondisi Air Laut yang masih jernih. Pantai Lumpue memiliki keindahan panorama alam yang sangat menakjubkan. Pantai Indah ini di hiasi oleh pasir nan halus serta kondisi Air Laut yang masih jernih. Pantai yang terletak di Kecamatan Bacukiki Kota Parepare ini merupakan salah satu tempat wisata terfavorit.',
          url : "https://2.bp.blogspot.com/-AYxTBHK1wtE/VOD5wrQ1-UI/AAAAAAAABAI/5TL6tleSGmc/w1200-h630-p-k-no-nu/Pantai%2BLumpue%2BTempat%2BLiburan%2BFavorit%2BDi%2BParepare%2B.jpg",
          alamat: "Lumpue, Bacukiki Bar., Kota Pare-Pare, Sulawesi Selatan 91123"
        },


        { name : 'Waterboom Pare-Pare',
          lat  : -4.007319, 
          long : 119.631653, 
          description : 'Menikmati beragam wahana air dapat anda rasakan di Waterboom pare pare. Permainan air dan wahan lainnya di tempat ini dijamin dapat menjadi hiburan bagi anda dan keluarga.',
          url : "http://2.bp.blogspot.com/-LgOCWKUfRzY/U5PZPPufgwI/AAAAAAAAAW0/PorNv7tTUfQ/s1600/DSC_0463.jpg",
          alamat: "Jl. Abubakar Lambogo, Ujung Lare, Soreang, Kota Pare-Pare, Sulawesi Selatan 91133"
        },

      ]

    },


      {name :'Pinrang',
      wisata : 
      [

      { name : 'Waterboom pinrang',
          lat  : -3.799177, 
          long : 119.649626, 
          description : 'Kota pinrang juga terkenal akan keindahan obyek wisatanya , salah satu contohnya adalah  Keindahan Wisata Waterboom Pinrang di Pinrang Sulawesi Selatan.Keindahan Wisata Waterboom Pinrang di Pinrang Sulawesi Selatan merupakan obyek wisata air yang sangat terkenal di kota pinrang dan sekitarnya.Wisata yang akrab dengan nuansa warna pelangi ini berukuran tidak kurang dari 2.450 meter persegi.',
          url : "https://sahabatnewsonline.files.wordpress.com/2016/08/wp-1472548852125.jpeg",
          alamat: "Jl. Pawelloi, Watang Suppa, Suppa, Kabupaten Pinrang, Sulawesi Selatan 91212"
        },


        { name : 'Gunung Tirasa',
          lat : -3.67473, 
          long : 119.679549, 
          description : 'Wisata Gunung tirasa di Pinrang Sulawesi Selatan merupakan obyek wisata alam yang sangat di gemari oleh masyarakat di sekitar pinrang sulawesi selatan, karena Wisata Gunung tirasa di Pinrang Sulawesi Selatan ini memiliki keindahan yang sangat luar biasa, hijaunya pepohonan serta sejuknya udara pegunungan menambah suasana menarik Wisata Gunung tirasa di Pinrang Sulawesi Selatan ini.',
          url : "https://3.bp.blogspot.com/-VxFH6UH2BtE/WkJB4Rr4GPI/AAAAAAAAcwo/7c6a-9s8zqU-O-Rdbl2P2s7C-Vxdr71SwCLcBGAs/s1600/Tapporang%2C+Batulappa%2C+Kabupaten+Pinrang%2C+Sulawesi+Selatan+91253+qw.jpg",
          alamat: "Tapporang, Batulappa, Kabupaten Pinrang, Sulawesi Selatan 91253"
        },


        { name : 'Monumen Lasinrang',
          lat : -3.808158, 
          long : 119.651994, 
          description : 'Wisata Monumen Lasinrang di Pinrang Sulawesi Selatan merupakan wisata sejarah di mana di lokasi ini terdapat monumen atau patung yang di abadikan oleh masyarakat setempat untuk mengenang jasa seseorang dalam melestarikan lingkungan hidup, patung sosok Tokoh pahlawan Dari bumi Lasinrang yang menjadi objek karakteristik pemuda Dan Masyarakat Pinrang ,Hadirnya taman Lasinrang Dipinrang membuat spirit baru bagi warga pinrang bahkan para wisatawan jika berkunjung ke pinrang harus ketaman Lasinrang berfoto.',
          url : "https://3.bp.blogspot.com/-VxFH6UH2BtE/WkJB4Rr4GPI/AAAAAAAAcwo/7c6a-9s8zqU-O-Rdbl2P2s7C-Vxdr71SwCLcBGAs/s1600/Tapporang%2C+Batulappa%2C+Kabupaten+Pinrang%2C+Sulawesi+Selatan+91253+qw.jpg",
          alamat: "Macorawalie, Watang Sawitto, Kabupaten Pinrang, Sulawesi Selatan 91212"
        },


        { name : 'Pantai Dewata Wakka',
          lat :  -3.756402, 
          long : 119.488664, 
          description : 'Wisata Pantai Dewata Wakka di Pinrang Sulawesi Selatan ini sangat cocok sekali untuk berlibur, hamparan pasir putih yang luas, birunya air laut daan juga sejuknya angin sepoi sepoi di tepi pantai semakin menambah suasana menarik di Wisata Pantai Dewata Wakka di Pinrang Sulawesi Selatan ini. Wisata Pantai Dewata Wakka di Pinrang Sulawesi Selatan ini sangat ramai di kunjunggi menjelang hari minggu ataupun hari libur, jumlah wisatawan bisa 2x lipat dari jumlah hari hari biasa,selain karena pemandangannya yang indah, harga tiket di Wisata Pantai Dewata Wakka di Pinrang Sulawesi Selatan ini cukup terjangkau bagi seluruh lapisan masyarakat.',
          url : "https://wisatalengkap.com/wp-content/uploads/2017/03/16465632_755319971309471_9142286017833730048_n-1.jpg",
          alamat: "Gusung Indah, Wakka, Tadang Palie, Cempa, Tadang Palie, Cempa, Kabupaten Pinrang, Sulawesi Selatan 91261"
        },


        { name : 'Pantai Ujung Tape',
          lat : -3.822956, 
          long : 119.510863, 
          description : 'Wisata Pantai Ujung Tape di Pinrang Sulawesi Selatan ini berbeda dengan pantai lainnya,di pantai ini biasanya para wistawan menikmati indahnya matahari tenggelam, karena memiliki panorama yang luar biasa dan biasanya selalu di abadikan oleh wisatawan sebagai keneng kenangan telah berkunjung di Wisata Pantai Ujung Tape di Pinrang Sulawesi Selatan ini.',
          url : "http://1.bp.blogspot.com/_D5TxtsY69D0/TBrEsrgi3PI/AAAAAAAADSc/lVtxpmhA3is/s320/pantai-pagatan3.jpg",
          alamat: "Pallameang, Mattirosompe, Kabupaten Pinrang, Sulawesi Selatan 91261"
        },


        { name : 'Pantai Lowita',
          lat : -3.97771, 
          long : 119.577144, 
          description : 'Wisata Pantai Lowita di Pinrang Sulawesi Selatan ini. obyek Wisata Pantai Lowita di Pinrang Sulawesi Selatan ini biasanya ramai di kunjunggi pada hari minggu atau hari libur, banyak wisatawan yang menghabiskan liburan di Wisata Pantai Lowita di Pinrang Sulawesi Selatan ini. Wisata Pantai Lowita di Pinrang Sulawesi Selatan ini memang banyak di minati oleh wisatawan baik asing maupun lokal, akses jalan menuju ke Wisata Pantai Lowita di Pinrang Sulawesi Selatan ini juga mudah di tempuh baik naik kendaraan roda dua ataupun mobil. dan untuk tiket masuknya cukup terjangkau bagi masyarakat umumnya.',
          url : "https://1.bp.blogspot.com/-1GUO1aF2-9s/Wjn-B3B0oQI/AAAAAAAAcvo/DcGvs-Vvzu83rD49hLNvfXci3TrzPFLIACLcBGAs/s1600/pantai1.jpg",
          alamat: "Tasiwalie, Suppa, Kabupaten Pinrang, Sulawesi Selatan 91272"
        },


        { name : 'Villa Puncak Karomba',
          lat : -3.408318, 
          long : 119.403082, 
          description : 'Kota pinrang juga terkenal akan keindahan obyek wisatanya , salah satu contohnya adalah Wisata Puncak Karomba di Pinrang Sulawesi Selatan ini. Wisata Puncak Karomba di Pinrang Sulawesi Selatan merupakan obyek wisata alam yang erkenal di kota pinrang dan sekitarnya. Puncak Karomba di Dusun Karomba, Desa Sali-sali, Kecamatan Lembang, Kabupaten Pinrang.',
          url : "https://i.ytimg.com/vi/AMmnhAJC1-s/maxresdefault.jpg",
          alamat: "Suppirang, Lembang, Kabupaten Pinrang, Sulawesi Selatan 91254"
        },


        { name : 'Pantai Jampue',
          lat : -3.909292, 
          long : 119.544336, 
          description : 'Wisata Pantai Jampue di Pinrang Sulawesi Selatan merupakan obyek wisata pantai yang sangt terkenal di kota pinrang dan sekitarnya.Pengunjung dapat merasakan indahnya pemandangan alam laut dan hembusan angin sepoi akan membuat suasana menjadi tenang. Wisata Pantai Jampue di Pinrang Sulawesi Selatan ini biasanya ramai di kunjunggi oleh wisatawan menjelang hari libur ataupun hari minggu, banyak wisatawan yang menghabiskan waktu liburan dengan datang ke Wisata Pantai Jampue di Pinrang Sulawesi Selatan ini.',
          url : "https://2.bp.blogspot.com/-bmkrPCdjK1c/Wk3b2P5tXSI/AAAAAAAAc58/y820H_e4gvY1F8bXd3gVZbX1P2qzaMb1QCLcBGAs/s1600/jampue.jpg",
          alamat: "Lanrisang, Kabupaten Pinrang, Sulawesi Selatan 91272"
        },


        { name : 'Harapan Ammani',
          lat : -3.761884, 
          long : 119.486281, 
          description : 'Wisata Pantai Harapan Ammani di Pinrang Sulawesi Selatan ini sangat ramai di kunjunggi ketika hari minggu ataupun menjelang liburan, banyak wisatawan yang menghabiskan waktu liburan dengan datang di Wisata Pantai Harapan Ammani di Pinrang Sulawesi Selatan ini, apalagi anak anak juga senang sekali bermain di tepi pantai, dengan membuat istana dari pasir atau ada juga yang bermain volly pantai, Wisata Pantai Harapan Ammani di Pinrang Sulawesi Selatan memang cocok sekali di datanggi bersama keluarga maupun rekan kerja.',
          url : "http://www.mongabay.co.id/wp-content/uploads/2017/05/pantai-ammani-wisata-lengkap-com.jpg",
          alamat: "Desa, Mattiro Tasi, Mattirosompe, Kabupaten Pinrang, Sulawesi Selatan 91261"
        },


        { name : 'Pantai kappe',
          lat : -3.599864, 
          long : 119.505212, 
          description : 'Wisata Pantai Kappe di Pinrang Sulawesi Selatan merupakan obyek wisata pantai yang sangat di gemari oleh masyarakat pinrang dan sekitarnya. Banyak wisatawan yang menghabiskan waktu liburan ke Pantai Kappe di Pinrang Sulawesi Selatan karena,indahnya pemandangan di sekitar pantai, birunya air laut,di pau dengan putihnya pasir di pesisir pantai semakin menambah eloknya pemandangan di Pantai Kappe di Pinrang Sulawesi Selatan ini.',
          url : "https://1.bp.blogspot.com/-3i5Y-1NwWNk/V8zN8nP1erI/AAAAAAAAEUE/Wm6wWjsRxBQv6dRn0EMygvcgPeCUOVaWACLcB/s1600/nyiur%2Bkelapa.jpg",
          alamat: "Data, Duampanua, Kabupaten Pinrang, Sulawesi Selatan 91253"
        },


        { name : 'Rumah makan terapung malimpung',
          lat : -3.727165, 
          long : 119.744621, 
          description : 'Wisata Rumah Makan Terapung Malimpung di Pinrang Sulawesi Selatan merupakan wisata kuliner yang sangat terkenal di pinrang sulawesi selatan. Rumah makan terapung itu menyediakan beraneka ragam makanan khas Kabupaten Pinrang, seperi bebek nasu palekko, bebek goreng, dan bebek panggang.Selain masakannya yang lezat, makan di tempat itu seolah berwisata dan bisa sanhat cocok untuk melepas penat.',
          url : "https://1.bp.blogspot.com/-6-t5vD0BD9w/WktcnelrpvI/AAAAAAAAc1Y/LYNdm0lOdw4_L59SMm0hdZzccr5r5wz_gCLcBGAs/s1600/makan.jpg",
          alamat: "Malimpung, Patampanua, Kabupaten Pinrang, Sulawesi Selatan 91252"
        },


        { name : 'Permandian Air Panas Sulili',
          lat : -3.765885, 
          long : 119.703216, 
          description : 'Permandian air panas alami di Sulili, Kelurahan Mamminasae, Pinrang, Sulsel menjadi salah satu objek wisata favorit yang ramai dikunjungi warga pasca liburan ataupun hari minggu. Lokasinya yang hanya berjarak belasan kilometer dari Kota Pinrang membuat obyek wisata alam ini paling diminati warga.Berendam di kolam air panas alami yang kaya belerang dipercaya warga bisa membuat badan terasa bugar dan sehat serta bisa menyembuhkan beragam penyakit kulit seperti gatal-gatal. Harga karcis masuk obyek wisata alam air panas Sulili sebesar Rp 6.000 untuk dewasa dan Rp 4.000 untuk anak-anak.',
          url : "https://wisatalengkap.com/wp-content/uploads/2017/03/Air-Panas-Sulili.jpg",
          alamat: "Mamminasae, Paleteang, Kabupaten Pinrang, Sulawesi Selatan 91215"
        },


        { name : 'Air terjun karawa',
          lat : -3.473735, 
          long : 119.54894, 
          description : 'Wisata Air Terjun Karawa di Pinrang Sulawesi Selatan merupakan obyek wisata alam yang sangat terkenal di kota pinrang dan sekitarnya.Selain airnya yang jernih serta suasana alam masih asri dan sejuk, juga karena pemandangan menuju lokasi air terjun ini begitu eksotis dan cocok untuk rileksasi diri.',
          url : "https://i.ytimg.com/vi/etcq38gZ8hA/hqdefault.jpg",
          alamat: "Betteng, Lembang, Kabupaten Pinrang, Sulawesi Selatan 91254"
        },


        { name : 'Rumah adat SAORAJA',
          lat : -3.791389, 
          long : 119.654435, 
          description : 'Wisata Rumah Adat SAORAJA di Pinrang Sulawesi Selatan merupakan obyek wisata budaya yang terkenal di kota pinrang dan sekitarnya, Rumah Adat itu mempunyai 101 tiang dengan berat setiap tiangnya mencapai 2 ton. Tak hanya menawarkan wisata budaya saja tapi juga wisata alam.Rumah adat tersebut dikelilingi persawahan, menambah nuansa alam saat berada di lokasi.Kayu tiang rumah adat tersebut bukan sembarang kayu, tapi kayu ulin.Rumah adat Saoraja dikelilingi rumah kecamatan dan beberapa rumah dinas yang biasa dipakai pameran tahunan.',
          url : "http://4.bp.blogspot.com/-xiKQjmoaDhU/VSmlmgyiIjI/AAAAAAAAC70/lsQNiZQ5aoY/s1600/DSC08013.jpg",
          alamat: "Sawito, Watang Sawitto, Kabupaten Pinrang, Sulawesi Selatan 91211"
        },

      ]

    },


      {name :'Sidrap',
      wisata : 
      [

      { name : 'Puncak Bila',
          lat : -3.819191, 
          long :120.04774, 
          description : 'Puncak bila merupakan tempat wisata yang paling populer di Kabupaten Sidrap. Tempat wisata ini memiliki banyak wahana bermain yang dapat dinikmati. Jadi selain memanjakan mata tempat wisata ini juga bisa menjadi ajang untuk menguji adrenalin.',
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3KPl6YEAJo2d40WjJxjekmBqhEX0az8jjlvXQyJDEMOB_ojA",
          alamat: "Jalan Poros Pare Sidrap, Bila Riase, Pitu Riase, Bila Riase, Pitu Riase, Kabupaten Sidenreng Rappang, Sulawesi Selatan 91691"
        },

        { name : 'Trans Park Sidrap',
          lat : -3.920645, 
          long : 119.700328, 
          description : 'Hanya berjarak sekitar 9,5 km dari pusat Kota Pangkajene Sidrap, wisatawan bisa menikmati liburan yang seru dengan mencoba berbagai wahana permainan yang ada. Selain fasilitas yang cukup memadai, panorama alam di perbukitan yang begitu eksotis juga dijamin bikin betah.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/waterboom-3_20170521_172731.jpg",
          alamat: "Lawawoi, Watang Pulu, Kabupaten Sidenreng Rappang, Sulawesi Selatan 91661"
        },


        { name : 'Taman wisata danau sidenreng',
          lat : -3.965654, 
          long : 119.897591, 
          description : 'Dana sidenreng merupakan salah satu andalah wisata sidrap. Di danau ini sering diadakan festival. Maka tidak heran ketika tempat ini menjadi tujuan wisata pavorit baik masyarakat sidrap maupun dari luar sidrap. Daya tarik wisata danau sidenreng ini bukan hanya dari festival yang sering diadakan tetapi juga keindahan danau tersebut.',
          url : "http://2.bp.blogspot.com/-aj1sHlaNSLM/U_NkEz-JUaI/AAAAAAAAGMk/rPdCHGkwS5o/s1600/Danau-Sidenreng-Sidrap%2B(1).jpg",
          alamat: "Danau, Sidenreng, Watang Sidenreng, Kabupaten Sidenreng Rappang, Sulawesi Selatan 90953"
        },

      ]

    },


      {name :'Enrekang',
      wisata : 
      [

      { name : 'Buttu Macca',
          lat : -3.4839, 
          long : 119.799023, 
          description : 'Wisata Kampong Buttu Macca, Kecamatan Anggareja, Kabupaten Enrekang, Sulsel bisa menjadi pilihan anda menghabiskan liburan akhir pekan. Lokasi Kampong Buttu Macca yang artinya Kampung Bukit Pintar ini berada sekitar 15 kilometer dari pusat kota Enrekang, dikelilingi Gunung Bambapuang dan Gunung Nona.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2017/07/Buttu.jpg",
          alamat: "Bamba Puang, Anggeraja, Kabupaten Enrekang, Sulawesi Selatan 91752"
        },


        { name : 'Air Terjun Kajejen',
          lat : -3.575249, 
          long : 119.802256, 
          description : 'Di objek wisata ini pengunjung bisa menikmati sensasi liburan seru dengan bermain water tubing.  Pada akhir pekan, wisatawan juga bisa camping di kawasan wisata ini..',
          url : "https://travelbisangenrekang.files.wordpress.com/2017/03/img20170308163105.jpg",
          alamat: "Lewaja, Kec. Enrekang, Kabupaten Enrekang, Sulawesi Selatan 91712"
        },


        { name : 'Air Terjun Lewaja',
          lat : -3.581438, 
          long : 119.810208, 
          description : 'Air Terjun Lewaja selalu ramai dikunjungi oleh warga Enrekang maupun mereka yang datang dari luar Enrekang. Lewaja juga dikenal sebagai tempat suci yang dipakai untuk ritual mandi bersama masyarakat Enrekang sebelum memasuki bulan Ramadhan. Selain air terjun di lokasi ini juga terdapat kolam renang alami.',
          url : "http://3.bp.blogspot.com/-cco_ZgIIzhk/VThpHpYCbZI/AAAAAAAAELQ/mnBE1jIR7_c/s1600/Air%2BTerjun%2BLewaja.jpg",
          alamat: "Lewaja, Kec. Enrekang, Kabupaten Enrekang, Sulawesi Selatan 91712"
        },



        { name : 'Dante Pine',
          lat : -3.446183, 
          long : 119.79168, 
          description : 'jika sebelumnya ada wisata Cekong Hills yang menawarkan wahana extrem, saat ini Dante Pine menjadi satu-satunya spot wisata dengan wahana extrem di Sulawesi Selatan. Mulai dari tarzan swing, flying fox sejauh 500 meter, dan permainan seru lainnya yang memicu adrenalin. Beberapa spot foto kece juga berada di ketinggian dengan pemandangan jurang di bawahnya.',
          url : "https://jadiberita.com/wp-content/uploads/2018/04/30830418_2006251846290083_7884101217058553856_n.jpg",
          alamat: "Tanete, Anggeraja, Kabupaten Enrekang, Sulawesi Selatan 91752"
        },

      ]


    },
      {name :'Soppeng',
      wisata :
      [


      { name : 'Permandian Air Panas Lejja',
          lat : -4.151081, 
          long : 119.787153, 
          description : 'Permandian air panas Lejja ini terletak di Desa Bulu, Kecamatan Marioriawa, yang berjarak 44 kilometer dari Kota Watansoppeng. Suhu air panas di permandian ini mencapai 60 derajat celcius, dan dipercayai dapat menyembuhkan penyakit gatal-gatal pada kulit dan sakit rematik. Selain itu, kamu akan disuguhi pemandangan alam yang indah dan sejuk karena berada di lokasi pegunungan.',
          url : "http://corporate.larizhotels.com/wp-content/uploads/2018/02/Lejja_soppeng_air_panas.jpg",
          alamat: "Bulue, Mario Riawa, Kabupaten Soppeng, Sulawesi Selatan 90852"
        },

        { name : 'Permandian Alam Ompo',
          lat : -4.331113, 
          long : 119.881977, 
          description : 'Permandian alam Ompo merupakan salah satu objek permandian alam yang ada di Kota Soppeng, dan menjadi objek wisata andalan yang banyak dikunjungi oleh wisatawan domestik. Selain menjadi tempat permandian, mata air Ompo ini juga menjadi sumber air bersih bagi masyarakat yang ada di Kota Soppeng.',
          url : "http://3.bp.blogspot.com/-JL2EPVEBOgs/TumBEulgICI/AAAAAAAAADc/5l6_s6UsQwU/s1600/images5.jpeg",
          alamat: "Ompo, Lalabata, Kabupaten Soppeng, Sulawesi Selatan 90814"
        },


        { name : 'Taman Kalong',
          lat : -4.355921, 
          long : 119.888105, 
          description : 'Taman Kalong (Kelelawar) dilengkapi Bundaran Air Mancur yang berwarna warni, menambah semarak indahnya Bumi La Temmamala di malam hari. Selain itu, taman ini juga dilengkapi sejumlah wahana bermain untuk anak – anak. Lokasi Taman Kalong ini sangat strategis, berada dialun – alun kota Soppeng, berdekatan dengan pepohonan yang dihuni ribuan Kelelawar, dibagian atasnya ada bangunan kuno Villa Yuliana dan Masjid Agung Darussalam, serta Rumah Kerajaan Soppeng (Bola Ridie).',
          url : "https://i0.wp.com/disbudpar.soppengkab.go.id/wp-content/uploads/2014/11/erickashar421-20180103-0001.jpg",
          alamat: "Lemba, Lalabata, Kabupaten Soppeng, Sulawesi Selatan 90811"
        },


        { name : 'Museum Villa Yuliana',
          lat : -4.348652, 
          long : 119.886702, 
          description : 'Villa Yuliana merupakan sebuah villa peninggalan penjajah Belanda yang sempat menduduki kota ini. Saat ini Villa Yuliana telah dijadikan museum oleh pemerintah setempat dan menjadi destinasi wisata yang wajib kamu kunjungi ketika traveling ke kota Soppeng.',
          url : "https://soppengkab.go.id/wp-content/uploads/2016/12/maxresdefault.jpg",
          alamat: "Botto, Lalabata, Kabupaten Soppeng, Sulawesi Selatan 90811"
        },


        { name : 'Rumah adat Sao Mario',
          lat : -4.135598, 
          long : 119.871436, 
          description : 'Rumah adat Sao Mario dibangun pada tahun 1993 oleh seorang Arsitek bernama Ir.Drs. Bakhriani A.rauf Manna. Pemilik dari rumah adat Sao Mario ini yaitu Prof.Dr. H. Andi Mustari Pide, SH (Datuk rajo nan sati) dan Hj.a. Sitti Runiang. Pemilik rumah ini adalah orang asli dari Batu-batu, Kec. Marioriawa, Kab. Soppeng. Rumah adat Sao Mario di Kelurahan Manorang, Kecamatan Marioriawa adalah rumah perpaduan dari tradisi Buginese (Batu-Batu Soppeng) dan Minangsih (Minangkabau).',
          url : "http://budpar.sulselprov.go.id/img_artikel/90saomario.jpg",
          alamat: "jl.poros, pangkajenne-soppeng, Laringgi, Mario Riawa, Kabupaten Soppeng, Sulawesi Selatan 90852"
        },


        { name : 'Permandian Lereng Hijau Bulu Dua',
          lat : -4.509988, 
          long : 119.802958, 
          description : 'Kolam permandian ini dulunya kolam ikan mas namun oleh pemiliknya di sulap menjadi kolam renang. Walaupun beberapa kolam ikan mas masih ada di sampingnya. Kolam ini terdiri atas dua buah kolam. Satu peruntukan orang dewasa dan satunya untuk anak-anak.',
          url : "https://i.ytimg.com/vi/TwRl5RzGbS4/maxresdefault.jpg",
          alamat: "Gattareng Toa, Mario Riwawo, Kabupaten Soppeng, Sulawesi Selatan 90862"
        },

      ]

    },

      {name :'Wajo',
      wisata :
      [

      { name : 'Danau Tempe',
          lat : -4.102911, 
          long : 120.022956, 
          description : 'Danau tempe merupakan tempat wisata yang sudah sangat dikenal wisatawan baik lokal maupun mancanegara. Tempat wisata ini menjadi ikon wisata Wajo dengan sejuta pesona yang ditawarkannya. Maka pilihan menikmati hari libur di wajo tidak akan lengkap tanpa mengunjungi danau tempe.',
          url : "http://gambar.merdekanews.co/gbr_artikel/Danau-Tempe-_2.png",
          alamat: "Assorajang, Tana Sitolo, Kabupaten Wajo, Sulawesi Selatan 90951"
        },


        { name : 'Masjid Besar Darusallam Belawa',
          lat : -4.002392, 
          long : 119.930342, 
          description : 'Mesjid ini berlokasi di Kecamatan Belawa sekitar 50 km dari kota Sengkang. Mesjid ini ramai dikunjungi jemaah dari luar kabupaten dan kota terutama pada Bulan Suci Ramadhan.',
          url : "https://assets-a1.kompasiana.com/items/album/2015/06/23/143503473910137599111.jpg",
          alamat: "Jalan Masjid Menge Belawa, Lepangeng, Wajo, Kabupaten Wajo, Sulawesi Selatan 90953"
        },


        { name : 'Kolam Renang Kalola',
          lat : -3.885649, 
          long : 120.079386, 
          description : 'Sogi, Maniang Pajo, Kabupaten Wajo, Sulawesi Selatan 90952.',
          url : "https://upload.wikimedia.org/wikipedia/id/e/e5/Waduk_Kalola_-_Kolam_renang.JPG",
          alamat: "Kolam renang kalola merupakan pemandian yang menjadi pavorit masyarakat wajo. Kolam renang yang berada di lokasi bendungan kalola ini sangat sejuk karena banyak pohon rindang yang tumbuh di sekitarnya."
        },

      ]

    },


      {name :'Palopo',
      wisata :
      [

      { name : 'Pantai Labombo',
          lat  : -3.001272, 
          long : 120.215397, 
          description : 'Pantai Labombo berada di Kota palopo dan merupakan pantai yang dikelola dengan baik oleh pemda setempat. Lokasinya berada tepat di timur kota palopo dan hanya memerlukan waktu singkat untuk menuju kesana. Wisata ke Pantai ini memerlukan retribusi ketika masuk kedalam. Dipantai ditemukan tenda, kursi atau hamparan pasir untuk sekedar duduk dan bersantai. Pantai ini nyaris tidak berombak karena mungkin berada di teluk dan airnya cenderung tenang. Hamparan pasirnya tidak lebar dan kadang berwarna hitam jika tercampur lumpur. Meskipun demikian pantai ini cukup bersih karena jauh dari polusi. Jika hari minggu/akhir pekan biasa ditemukan panggung bernyanyi dan suasana biasanya lebih ramai. Wisata ini cocok untuk anda dan keluarga bersantai di kirasan kota Palopo sambil bersantap siang disekitar pantai. Sebagai tambahan lokasinya juga menarik untuk fotografi karena suasana pantai yang alami oleh tumbuhan pesisir.',
          url : "https://1.bp.blogspot.com/-JnvNnNzZCbw/TtBW834ffJI/AAAAAAAAADY/Tbj5UIDLA3w/s1600/Copy%2Bof%2BIMG_1745.JPG",
          alamat: "Salekoe, Wara Tim., Kota Palopo, Sulawesi Selatan 91921"
        },


        { name : 'Bukit 513',
          lat  : -2.987083, 
          long : 120.148384, 
          description : 'Bukit 513 ini berjarak 8 kilo meter dari Pusat Kota, serta mudah untuk dijangkau baik menggunakan Kendaraan Roda empat maupun kendaraan Roda Dua, perjalanan menuju bukit 513 membuat akan memacu adrenalin para pengunjung dimana akses menuju ketinggian bukit memiliki jalan yang berbelok dan bergejolak,  Jalan sedikit  sempit dan menanjak. Disarankan kepada pengunjung untuk menggunakan transportasi roda dua untuk memudahkan akses menuju bukit 513. Ongkos  masuk menuju Bukit 513 bisa dibilang sangat- sangat cukup murah, sehingga wisatawan dapat merogoh kocek sebesar 5000 rupiah saja per orangnya dan kita bisa menikmati fasilitas yang tersedia.',
          url : "https://koranseruya.com/wp-content/uploads/2017/11/bukit-513-2.jpg",
          alamat: "Lebang, Wara, Kota Palopo, Sulawesi Selatan 91911"
        },



        { name : 'Lereng Cinta',
          lat  : -3.030567, 
          long : 120.175911, 
          description : 'Berawal dari hobi mencangkul alias bercocok tanam, Waka Polres Palopo, Kompol Woro Susilo membuahkan destinasi wisata baru. Lahan kebun yang tadinya kurang terawat disulap menjadi tempat refreshing paling anyar di Kota Palopo.Objek wisata itu diberi nama “Lereng Cinta”. Terletak di sebuah lereng gunung Kelurahan Mawa, Kecamatan Sendana, Kota Palopo. Jaraknya dari pusat Kota Palopo hanya sekira 10 hingga 15 menit dengan menggunakan kendaraan bermotor. Pemandangan cantik dan asyik banget. Dari ketinggian 130 meter diatas permukaan laut (dpl), dapat melihat wajah Kota Palopo sampai ke laut. Hawanya juga sejuk, ditambah nuansa warna-warni di antara pepohonan nan hijau.Objek wisata ini memiliki icon tersendiri yakni rumah pohon dengan atap terbalik. Dilengkapi dengan wahana outbond seperti flaying fox, lereng ayun, jogging track. Juga menawarkan kesan romantis dengan menghadirkan gembok cinta, tenda love-love berwarna pink, dan lainnya.',
          url : "https://koranseruya.com/wp-content/uploads/2017/04/lereng-cinta.jpg",
          alamat: "Jl. Andi Bintang, Mawa, Sendana, Mawa, Sendana, Kota Palopo, Sulawesi Selatan 91921"
        },


        { name : 'Gunung kambing',
          lat  : -2.980523, 
          long : 120.182399, 
          description : 'Siapa yang tak kenal dengan Gunung Kambing, gunung yang ketinggiannya berkisar 1.200 meter di atas permukaan laut atau jarak tempuh perjalanan bila mendaki untuk sampai ke puncak kurang lebih dari satu sampai dua jam ini, mempunyai daya tarik tersendiri bagi yang pernah melihat langsung keindahan Kota Palopo dari atas pundaknya.Memang berbeda, apabila mengunjungi wisata cafe ala Gunung Kambo. Di mana yang satu cukup mengandalkan Bensin, sedangkan yang satunya lagi mengandalkan Nasi. Gunung Kambing berada di wilayah Salobulo, Ratulangi, dimulai dari kuburan Pahlawan sampai Kuburan China. Kalau dilihat dari depan, posisinya berada di sebelah kanan Anda, sedangkan yang berada disebelah kiri dinamakan Gunung Bota. Pun untuk mencapai lokasinya bisa melalui jalur Kuburan Pahlawan, Perumahan Libukang Permai atau mau lebih cepatnya lewat jalur Kuburan China atau lewat jalur belakang STM.',
          url : "https://nyero.id/wp-content/uploads/2018/02/Wisata-Hits-Gunung-Kambing-Kota-Palopo.png",
          alamat: "Salobulo, Wara Utara, Kota Palopo, Sulawesi Selatan 91911"
        },


        { name : 'Air Terjun Latuppa',
          lat  : -3.025837, 
          long : 120.131956, 
          description : 'Air Terjun Latuppa mempunyai tiga tingkatan air terjun & berada di rimbunnya perkebunan coklat. Di dekat area air terjun ini tidak sedikit dijumpai pohon buah-buahan seperti durian, rambutan, langsat/duku & manggis.Berjarak 9 kilo meter dari Kota Palopo atau kira kira 10 menit perjalanan bersama berkendara. Buat mencapai ruang ini mesti melintasi jalan beraspal, berkelok, menurun & menanjak dgn pemandangan ajaran sungai di sebelah kiri yg panjangnya + 2000 meter yg teramat serasi dikembangkan juga sebagai salah satu obyek wisata Arung Jeram, di mana ajaran sungainya lewat tebing & batu papan pula arusnya lumayan deras. Perjalan setelah itu ditempuh bersama terjadi kaki lewat jalan setapak yg licin & terjal diantara perkebunan kakao milik penduduk setempat, lebih kurang 50 meter dari tempat parkir.Transportasi ke Latuppa pass tidak tersendat. Apabila tidak memiliki kendaraan pribadi utk menuju ke Latuppa ada sekian banyak alternatif kendaraan. Sanggup dgn menyewa ojek, pete-pete (nama lain dari mikrolet) atau dgn taksi.',
          url : "http://picture.triptrus.com/image/2014/06/air-terjun-latuppa.jpeg",
          alamat: "Latuppa, Mungkajang, Kota Palopo, Sulawesi Selatan 91921"
        },


        { name : 'Bukit Kambo',
          lat  : -3.004041, 
          long : 120.144679, 
          description : 'Bukit Kambo merupakan surga yang tersembunyi di balik ramainya Kota Palopo. Bukit Kambo terletak di sebelah barat kota Palopo tepatnya di kecamatan Mungkajang yang berjarak sekitar 5 km dari pusat kota atau sekitar setengah jam dari kota Palopo.',
          url : "https://media-cdn.tripadvisor.com/media/photo-s/0d/0c/83/ef/city-view-dari-bukit.jpg",
          alamat: "Kambo, Mungkajang, Kota Palopo, Sulawesi Selatan 91924"
        },


      ]

    },

      {name :'Toraja',
      wisata :
      [


      { name : 'Ke’te Kesu’',
          lat : -2.996647, 
          long : 119.910109, 
          description : 'Ke’te’ Kesu adalah salah satu objek wisata Toraja yang wajib dikunjungi. Kete Kesu adalah suatu desa wisata di kawasan Tana Toraja yang dikenal karena adat dan kehidupan tradisional masyarakat dapat ditemukan di kawasan ini. Di dalam Kete Kesu terdapat peninggalan purbakala berupa kuburan batu yang diperkirakan berusia 500 tahun lebih. Di dalam kubur batu yang menyerupai sampan atau perahu tersebut, tersimpan sisa-sisa tengkorak dan tulang manusia. Hampir semua kubur batu diletakkan menggantung di tebing atau gua. Selain itu, di beberapa tempat juga terlihat kuburan megah milik bangsawan yang telah meninggal dunia.',
          url : "https://www.superadventure.co.id/uploads/news/2018/05/07/2bb0ef9be936_resize_800_600_rel_left_top.jpg",
          alamat: "Pantanakan Lolo, Kesu, North Toraja Regency, South Sulawesi 91834"
        },


        { name : 'Wisata Lemo',
          lat : -3.041534,
          long : 119.871671, 
          description : 'Objek wisata Lemo yang berlokasi di Tana Toraja terkenal sebagai rumah para arwah. Di tempat ini, anda dapat melihat jenazah yang disimpan di ruang terbuka tepatnya berada di dinding bukit yang curam. Tempat makam ini merupakaan perpaduan antara kematian, seni dan ritual.Di lokasi ini juga terdapat patung kayu atau disebut tao – tao yang dipahat dengan sangat detail. Jika anda teliti, akan terlihat postur tangan patung dimana tangan kanan menghadap keatas sementara tangan kiri menghadap ke bawah. Postur tangan ini sendiri memiliki arti khusus yaitu meminta dan memberkati serta mencerminkan posisi antara mereka yang masih hidup dan telah wafat. Mereka yang telah wafat membutuhkan bantuan dari keturunan mereka yang masih hidup. Bantuan yang dimaksud adalah melakukan serangkaian upacara adat agar mereka yang telah wafat dapat mencapai surga. Juga upacara adat ini dimaksudkan agar mereka yang masih hidup mendapatkan berkah hingga turun temurun. .',
          url : "http://www.indonesia-tourism.com/south-sulawesi/gallery/lemo/lemo-tomb-stone-toraja-02.jpg",
          alamat: "Lemo, Makale Utara, Kabupaten Tana Toraja, Sulawesi Selatan 92119"
        },


        { name : 'Wisata Kalimbuang Bori',
          lat  : -2.919938, 
          long : 119.920066, 
          description : 'Batu-batu tegak berdiri pada hamparan hijau tanah rumput. Berbentuk menhir. Tinggi memanjang menyembul dari daratan. Tapi tak seragam. Ada yang kecil, ada yang besar. Ada yang pendek ada yang tinggi. Saya tertarik menyelinap masuk di antara bebatuan ini. Berpindah dari satu batu ke batu lain. Kilat tak menjejakkan suara. Ah, saya sedang iseng bermain sembunyi-sembunyian. Dooorrr! Basho terkaget ketika sibuk mencari saya yang seperti hilang tertelan di Rante Kalimbuang.Keseluruhan batu menhir di sini konon berjumlah 102 buah. Terdiri dari 54 menhir kecil, 24 sedang dan 24 batu berukuran besar. “jelas Basho seraya ia menguasai diri dari keterkagetannya. Untung saja Basho orangnya ramah. Tak nampak ada marah setelah saya jahili. Dia sangat profesional. Rante Kalimbuang merupakan kawasan utama di Bori’ Kalimbuang, Sesean, Toraja Utara. Rante menjadi tempat upacara pemakaman adat atau Rambu Solo’ yang dilengkapi dengan menhir-menhir yang dikenal dalam bahasa Toraja sebagai simbuang batu. Di Tana Toraja sebenarnya banyak ditemukan situs megalith seperti ini. Di Bori Kalimbuang, menhir didirikan demi menghormati pemuka adat atau keluarga bangsawan yang meninggal. Bebatuan menhir ini ada yang berusia hingga ratusan tahun.',
          url : "http://4.bp.blogspot.com/-IknTgnMYVZQ/UTQppXLaMWI/AAAAAAAAAhc/-D0IoeEVma4/s1600/DSC_0008.jpg",
          alamat: "Bori, Sesean, Kabupaten Toraja Utara, Sulawesi Selatan 91853"
        },


        { name : 'Museum Ne’gandeng',
          lat  : -2.928972, 
          long : 119.948844, 
          description : 'Museum Ne’ gandeng berada di tengah sawah. Tepatnya di Desa Palangi, Kecamatan Sa’dan Balusu.Ne’Gandeng adalah salah satu tempat wisata yang juga berada di Tana Toraja. Akan tetapi tempat wisata yang satu ini, dikenal bukan karena wisata alamnya, atau wahananya, melainkan karena Tongkonannya yang begitu banyak sehingga membuat tempat ini memiliki keunikan dari tempat wisata yang lain.Untuk lokasi sendiri, Museum Ne’ Gandeng letaknya tidak terlalu jauh dari Rantepao, hanya sekitar 10 kilometer. Transportasinya bisa menggunakan kendaraan roda dua maupun roda empat.',
          url : "https://i0.wp.com/www.objekwisatapopuler.com/wp-content/uploads/2016/12/Museum-Ne%E2%80%99-Gandeng.jpg?fit=758%2C426",
          alamat: "Tagari, Balusu, Kabupaten Toraja Utara, Sulawesi Selatan 91853"
        },


        { name : 'Air Terjun Talondo Tallu',
          lat  : -3.077996, 
          long : 119.816566, 
          description : 'objek wisata air terjun talondo tallu yang terletak di dusun sanik lembang balepe kecamatan malimbong balepe, berjarak 30 kilo meter dari kota Makale. punya keunikanya sendiri yakni air terjun bercabang tiga dengan menawarkan kesejuk alamnya.Air terjun talondo tallu ini bercabang tiga dengan pertemuan ketiga air terjun tersebut berbentuk kolam alam dengan air yang jernih. Yang dapat dinikmati oleh para pengunjung yang ingin menghabiskan waktu libur di air terjun tersebut. Uniknya lagi penjaga atau juru kunci air terjun ini Indo Talando mempunyai rambut terpanjang di Toraja sekitar 7-9 meter, menurut masyarakat kampung (dusun) Sanik bahwa rambut indo talondo sejak berumur 10 tahun hinggah berumur 65 saat ini, rambutnya tetap dipelihara, karena gunting biasa tidak mempan untuk memotongnya.',
          url : "https://media.travelingyuk.com/wp-content/uploads/2018/04/Air-Terjun-Talondo-Tallu-3.jpg",
          alamat: "Burasia, Bittuang, Kabupaten Tana Toraja, Sulawesi Selatan 91856"
        },


        { name : 'Wisata Ollon',
          lat  : -3.227798, 
          long : 119.667084, 
          description : 'Ollon adalah sebuah kampung di wilayah pemerintahan Lembang/Desa Bau, Kecamatan Bonggakaradeng. Daerah ini terletak di wilayah barat di bagian selatan Kabupaten Tana Toraja, Sulawesi Selatan. arak tempuh dari kota Makale, ibukota kabupaten Tana Toraja diperkirakan sekitar 35 kilometer, dengan kondisi jalan yang belum memadai.Untuk sampai ke Ollon, jalan alternatif paling efesien adalah dari kota Makale menuju Rembon lalu belok ke jalur Batusura’ menuju ke Buakayu, Bonggakaradeng. Setelah sampai di Buakayu, kita lurus terus mengarah ke bagian selatan melalui pasar dan kantor kecamatan Bonggakaradeng..',
          url : "https://www.karebatoraja.com/wp-content/uploads/2017/01/Galang-1.jpg",
          alamat: "Bau, Bonggakaradeng, Kabupaten Tana Toraja, Sulawesi Selatan 91872"
        },


        { name : 'Pango-Pango makale',
          lat  : -3.112773, 
          long : 119.841949, 
          description : 'Pango-Pango merupakan Obyek wisata alam yang berada di ketinggian, maka dari itu banyak orang dan masyarakat sekitar menyebutnya sebagai negeri diatas awan. Hal itu disebabkan karena pango-pango merupakan hutan yang berada di atas puncak gunung , dimana ketinggian gunungnya mencapai 1600 - 1700 Mdpl.Pango-Pango merupakan obyek wisata yang menggabungkan dua unsur tempat wisata, yaitu wisata alam dan agro wisata.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/pango_20160618_120101.jpg",
          alamat: "Kelurahan Pasang, Makale Sel., Kabupaten Tana Toraja, Sulawesi Selatan 91815"
        },


        { name : 'Limbong',
          lat  : -2.953588, 
          long : 119.863658, 
          description : 'Limbong berarti sumber air yang tertampung dalam bahasa Toraja. Konon di musim kemarau pun kolam Limbong tidak pernah mengalami kekeringan, bahkan di musim penghujan kolam Limbong mengalirkan airnya ke sawah-sawah. Limbong juga dikenal dalam seni ukir orang Toraja: Pa’ Limbongan. Diambil dari nama Ne’ Limbongan, konon merupakan pencipta awal mula ukiran Toraja. Suku Batak yang diyakini kuat masih satu rumpun dengan suku Toraja pun mempunyai kata Limbong dalam sejarahnya.Limbong Mulana, cucu Raja Batak. Berkunjung ke sana, desa bernama Limbong dapat ditemukan. Berlayar ke Melaka, Kampung Limbongan ada di sana..',
          url : "https://asset.kompas.com/data/photo/2016/07/29/1123166dek-Pemandangan-Kolam-Alam-Limbong-di-Toraja780x390.jpeg",
          alamat: "Rantepao, Toraja Utara"
        },

      ]

    },

      {name :'Luwu',
      wisata :
      [

          { name : 'Wisata Air Panas Pincara',
          lat  : -2.487414, 
          long : 120.376186, 
          description : 'Lokasi permandian ini di Desa Pincara, Kecamatan Masamba. Sebelas kilometer dari pusat Kota Masamba, Ibu kota Kabupaten Luwu Utara. Air panas Pincara dikenal ampuh membuat tubuh rileks. Airnya jernih, alami dari perut pegunungan Desa Pincara. Pengunjung bisa bisa mandi-mandi rileks sembari menikmati panorama sungai.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/air-panas-pincara_20160731_210716.jpg",
          alamat: "Pincara, Masamba, Kabupaten Luwu Utara, Sulawesi Selatan 92917"
        },


          { name : 'Taman Lestari Sulikan Masamba',
          lat  : -2.553177, 
          long : 120.329349, 
          description : 'Wisata Taman Lestari Sulikan Masamba di luwu Utara Sulawesi Selatan memiliki pesona keindahan yang sangat menarik untuk dikunjungi. Sangat di sayangkan jika anda berada di kota luwu utara tidak mengunjungi wisata taman yang mempunyai keindahan  yang tiada duanya tersebut. Wisata Taman Lestari Sulikan Masamba di luwu Utara Sulawesi Selatan sangat cocok untuk mengisi kegiatan liburan anda, apalagi saat liburan panjang seperti libur nasional, ataupun hari ibur lainnya.  Keindahan Wisata Taman Lestari Sulikan Masamba di luwu Utara Sulawesi Selatan ini sangatlah baik bagi anda semua yang berada di dekat  atau di kejauhan untuk merapat mengunjungi tempat Wisata Taman Lestari Sulikan Masamba di luwu Utara Sulawesi Selatan.',
          url : "https://1.bp.blogspot.com/-UsoGdJb248k/WmgqeWTS28I/AAAAAAAAddM/8JEBPsFzABICv7nAcLRnKf0PQPafAvgdQCLcBGAs/s1600/sulikan.jpg",
          alamat: "Bone, Masamba, Kabupaten Luwu Utara, Sulawesi Selatan 92961"
        },


          { name : 'Pantai Ponnori',
          lat  : -3.628836, 
          long : 120.415728, 
          description : 'Objek Wisata Pantai Ponnori di Desa TemboE Kecamatan Larompong Selatan merupakan salah satu kawasan Objek Wisata Unggulan Kabupaten Luwu. Kawasan objek wisata bahari ini menawarkan panorama indah pesisir pantai di Kabupaten Luwu. Lokasi ini terletak sekitar 25 kilo meter dari arah Selatan Kota Belopa. Objek wisata pantai Ponnori ini memiliki keunggulan dari beberapa objek wisata lain, salah satunya pantai Ponnori menawarkan keindahan pasir putih kemerahan, dan kebersihan wilayah tersebut dan yang paling melengkapi keindahan objek wisata Bahari ini, pada sisi kiri dan kanannya terdapat tanjung-tanjung yang landai, dibawah dasar tanjung terdapat potongan-potongan batu papan layaknya sebuah lantai rumah.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/luwu_20171116_224503.jpg",
          alamat: "Gulf of Boni, Temboe, Larompong Sel., Kabupaten Luwu, Sulawesi Selatan 91998"
        },


          { name : 'Air Terjun Sarambu Masiang',
          lat  : -3.500951, 
          long : 120.279356, 
          description : 'Salah satu objek wisata di Kabupaten luwu memiliki daya tarik tersendiri untuk dikunjungi. Berada di ketinggian 640 MDPL, objek wisata yang baru diperkenalkan Pemerintah Kabupaten Luwu ini menawarkan suasana alam yang eksotis.Air Terjun Sarambu Masiang tampak megah dengan ketinggian curah air kurang lebih 150 meter. Lokasinya berada di kaki gunung Latimojong, diapit oleh dua gunung yang belum terjamah.Suasana yang alami langsung menedekap pandangan begitu tiba di Air Terjun Sarambu, ditambah ratusan pohon pinus yang menjulang tinggi, belum lagi dengan segarnya air dari sungai yang terbentuk dari aliran air terjun tersebut.Tak ayal, pesona keindahan destinasi wisata ini mampu menghipnotis pegunjung. Akses menuju lokasi air terjun memang cukup panjang, ditempuh kurang lebih 35 Km dari Kota Belopa melalui medan ekstrim. Hal ini membuat Air Terjun Sarambu cocok bagi Anda penyuka tantangan berkendara di medan yang tak biasa.',
          url : "http://cdn2.tstatic.net/makassar/foto/bank/images/komunitas-patahuddin-luwu_20170310_015720.jpg",
          alamat: "Kaladi Darussalam, Suli Bar., Kabupaten Luwu, Sulawesi Selatan 91996"
        },

      ]

    },
    ]

    export default data