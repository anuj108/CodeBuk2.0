import express from 'express';
import Post from '../models/post.js';
const router = express.Router();


router.get("/post", async (req, res) => {
  console.log("-------------------------KDSGKCHKDCdlfnvsfnlfnlnsl");
  try {
    const skip =
      req.query.skip && /^\d+$/.test(req.query.skip)
        ? Number(req.query.skip)
        : 0;

    const posts = await Post
      .find({}, undefined, { skip, limit: 5 })
      .sort("first_name");
    console.log("posts hai ye->",posts);
    res.send(posts);
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/post", async (req, res) => {
  try {
    const posts = await Post.create([
      {
        id: 1,
        first_name: "Annetta",
        last_name: "Gait",
        postImage: "http://dummyimage.com/208x100.png/dddddd/000000",
        summary:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        profilePhoto: "http://dummyimage.com/167x100.png/ff4444/ffffff",
      },
      {
        id: 2,
        first_name: "Jobina",
        last_name: "Wyon",
        postImage: "http://dummyimage.com/225x100.png/cc0000/ffffff",
        summary:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        profilePhoto: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
      },
      {
        id: 3,
        first_name: "Samson",
        last_name: "Matityahu",
        postImage: "http://dummyimage.com/204x100.png/cc0000/ffffff",
        summary:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        profilePhoto: "http://dummyimage.com/240x100.png/cc0000/ffffff",
      },
      {
        id: 4,
        first_name: "Sydel",
        last_name: "Arrigucci",
        postImage: "http://dummyimage.com/203x100.png/dddddd/000000",
        summary:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        profilePhoto: "http://dummyimage.com/118x100.png/ff4444/ffffff",
      },
      {
        id: 5,
        first_name: "Jorie",
        last_name: "Riche",
        postImage: "http://dummyimage.com/222x100.png/ff4444/ffffff",
        summary: "In congue. Etiam justo. Etiam pretium iaculis justo.",
        profilePhoto: "http://dummyimage.com/137x100.png/dddddd/000000",
      },
      {
        id: 18,
        first_name: "Dov",
        last_name: "Valasek",
        postImage: "http://dummyimage.com/132x100.png/dddddd/000000",
        summary:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        profilePhoto: "http://dummyimage.com/185x100.png/cc0000/ffffff",
      },
      {
        id: 19,
        first_name: "Rafi",
        last_name: "Yakubovics",
        postImage: "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
        summary:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        profilePhoto: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
      },
      {
        id: 20,
        first_name: "Wynn",
        last_name: "Swansborough",
        postImage: "http://dummyimage.com/177x100.png/ff4444/ffffff",
        summary:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        profilePhoto: "http://dummyimage.com/107x100.png/cc0000/ffffff",
      },
      {
        id: 21,
        first_name: "Dunstan",
        last_name: "Herrema",
        postImage: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
        summary:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        profilePhoto: "http://dummyimage.com/171x100.png/cc0000/ffffff",
      },
      {
        id: 22,
        first_name: "Kean",
        last_name: "Keeney",
        postImage: "http://dummyimage.com/236x100.png/cc0000/ffffff",
        summary:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        profilePhoto: "http://dummyimage.com/175x100.png/ff4444/ffffff",
      },
      {
        id: 23,
        first_name: "Florrie",
        last_name: "Henstridge",
        postImage: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
        summary:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        profilePhoto: "http://dummyimage.com/250x100.png/cc0000/ffffff",
      },
      {
        id: 24,
        first_name: "Marcille",
        last_name: "Cholonin",
        postImage: "http://dummyimage.com/141x100.png/dddddd/000000",
        summary:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        profilePhoto: "http://dummyimage.com/114x100.png/ff4444/ffffff",
      },
      {
        id: 25,
        first_name: "Thorn",
        last_name: "Brittin",
        postImage: "http://dummyimage.com/117x100.png/ff4444/ffffff",
        summary:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        profilePhoto: "http://dummyimage.com/191x100.png/5fa2dd/ffffff",
      },
      {
        id: 26,
        first_name: "Khalil",
        last_name: "Mattimoe",
        postImage: "http://dummyimage.com/207x100.png/cc0000/ffffff",
        summary:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        profilePhoto: "http://dummyimage.com/117x100.png/dddddd/000000",
      },
      {
        id: 27,
        first_name: "Winny",
        last_name: "Pirrie",
        postImage: "http://dummyimage.com/115x100.png/cc0000/ffffff",
        summary:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        profilePhoto: "http://dummyimage.com/175x100.png/ff4444/ffffff",
      },
      {
        id: 28,
        first_name: "Irina",
        last_name: "Moukes",
        postImage: "http://dummyimage.com/124x100.png/dddddd/000000",
        summary:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        profilePhoto: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
      },
      {
        id: 29,
        first_name: "Rand",
        last_name: "Skrines",
        postImage: "http://dummyimage.com/133x100.png/cc0000/ffffff",
        summary:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        profilePhoto: "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
      },
      {
        id: 30,
        first_name: "Meryl",
        last_name: "Rounsefell",
        postImage: "http://dummyimage.com/133x100.png/cc0000/ffffff",
        summary:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        profilePhoto: "http://dummyimage.com/151x100.png/ff4444/ffffff",
      },
      {
        id: 31,
        first_name: "Lanae",
        last_name: "Barthel",
        postImage: "http://dummyimage.com/236x100.png/dddddd/000000",
        summary:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        profilePhoto: "http://dummyimage.com/113x100.png/ff4444/ffffff",
      },
      {
        id: 32,
        first_name: "Jehanna",
        last_name: "Caustic",
        postImage: "http://dummyimage.com/129x100.png/cc0000/ffffff",
        summary:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        profilePhoto: "http://dummyimage.com/224x100.png/dddddd/000000",
      },
      {
        id: 33,
        first_name: "Kaitlyn",
        last_name: "Roddan",
        postImage: "http://dummyimage.com/139x100.png/ff4444/ffffff",
        summary:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        profilePhoto: "http://dummyimage.com/188x100.png/dddddd/000000",
      },
      {
        id: 34,
        first_name: "Celle",
        last_name: "Sawter",
        postImage: "http://dummyimage.com/111x100.png/ff4444/ffffff",
        summary:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        profilePhoto: "http://dummyimage.com/148x100.png/ff4444/ffffff",
      },
      {
        id: 35,
        first_name: "Rahel",
        last_name: "Leber",
        postImage: "http://dummyimage.com/110x100.png/cc0000/ffffff",
        summary:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        profilePhoto: "http://dummyimage.com/234x100.png/ff4444/ffffff",
      },
      {
        id: 36,
        first_name: "Eloise",
        last_name: "Klimpt",
        postImage: "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
        summary: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        profilePhoto: "http://dummyimage.com/179x100.png/cc0000/ffffff",
      },
      {
        id: 37,
        first_name: "Forrest",
        last_name: "Click",
        postImage: "http://dummyimage.com/153x100.png/cc0000/ffffff",
        summary:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        profilePhoto: "http://dummyimage.com/131x100.png/cc0000/ffffff",
      },
      {
        id: 38,
        first_name: "Jacintha",
        last_name: "Heinz",
        postImage: "http://dummyimage.com/166x100.png/5fa2dd/ffffff",
        summary:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        profilePhoto: "http://dummyimage.com/165x100.png/ff4444/ffffff",
      },
      {
        id: 39,
        first_name: "Ritchie",
        last_name: "Deeming",
        postImage: "http://dummyimage.com/205x100.png/ff4444/ffffff",
        summary:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        profilePhoto: "http://dummyimage.com/219x100.png/ff4444/ffffff",
      },
      {
        id: 40,
        first_name: "Claybourne",
        last_name: "Alasdair",
        postImage: "http://dummyimage.com/134x100.png/ff4444/ffffff",
        summary:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        profilePhoto: "http://dummyimage.com/229x100.png/5fa2dd/ffffff",
      },
      {
        id: 41,
        first_name: "Rhodie",
        last_name: "Trembley",
        postImage: "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
        summary:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        profilePhoto: "http://dummyimage.com/140x100.png/dddddd/000000",
      },
      {
        id: 42,
        first_name: "Garret",
        last_name: "Toffetto",
        postImage: "http://dummyimage.com/150x100.png/dddddd/000000",
        summary:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        profilePhoto: "http://dummyimage.com/152x100.png/dddddd/000000",
      },
      {
        id: 43,
        first_name: "Bernice",
        last_name: "Sorbey",
        postImage: "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
        summary:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        profilePhoto: "http://dummyimage.com/153x100.png/cc0000/ffffff",
      },
      {
        id: 44,
        first_name: "Tremain",
        last_name: "Dowson",
        postImage: "http://dummyimage.com/157x100.png/cc0000/ffffff",
        summary:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        profilePhoto: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
      },
      {
        id: 45,
        first_name: "Traver",
        last_name: "Belloch",
        postImage: "http://dummyimage.com/186x100.png/cc0000/ffffff",
        summary:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        profilePhoto: "http://dummyimage.com/226x100.png/cc0000/ffffff",
      },
      {
        id: 46,
        first_name: "Kalina",
        last_name: "Surman-Wells",
        postImage: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
        summary:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        profilePhoto: "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
      },
      {
        id: 47,
        first_name: "Giles",
        last_name: "Blockley",
        postImage: "http://dummyimage.com/107x100.png/ff4444/ffffff",
        summary:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        profilePhoto: "http://dummyimage.com/217x100.png/cc0000/ffffff",
      },
      {
        id: 48,
        first_name: "Elladine",
        last_name: "Vedekhin",
        postImage: "http://dummyimage.com/142x100.png/dddddd/000000",
        summary:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        profilePhoto: "http://dummyimage.com/166x100.png/ff4444/ffffff",
      },
      {
        id: 49,
        first_name: "Erin",
        last_name: "Byars",
        postImage: "http://dummyimage.com/123x100.png/ff4444/ffffff",
        summary:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        profilePhoto: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
      },
      {
        id: 50,
        first_name: "Ingeborg",
        last_name: "Giercke",
        postImage: "http://dummyimage.com/167x100.png/dddddd/000000",
        summary:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        profilePhoto: "http://dummyimage.com/177x100.png/cc0000/ffffff",
      },
      {
        id: 51,
        first_name: "Hyatt",
        last_name: "Maud",
        postImage: "http://dummyimage.com/181x100.png/cc0000/ffffff",
        summary:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        profilePhoto: "http://dummyimage.com/112x100.png/ff4444/ffffff",
      },
      {
        id: 52,
        first_name: "Chandal",
        last_name: "Samuel",
        postImage: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
        summary:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        profilePhoto: "http://dummyimage.com/102x100.png/ff4444/ffffff",
      },
      {
        id: 53,
        first_name: "Holden",
        last_name: "Knell",
        postImage: "http://dummyimage.com/212x100.png/dddddd/000000",
        summary:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        profilePhoto: "http://dummyimage.com/187x100.png/ff4444/ffffff",
      },
      {
        id: 54,
        first_name: "Sancho",
        last_name: "Bresman",
        postImage: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
        summary:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        profilePhoto: "http://dummyimage.com/217x100.png/dddddd/000000",
      },
      {
        id: 55,
        first_name: "Maddy",
        last_name: "Meighan",
        postImage: "http://dummyimage.com/179x100.png/dddddd/000000",
        summary:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        profilePhoto: "http://dummyimage.com/193x100.png/5fa2dd/ffffff",
      },
      {
        id: 56,
        first_name: "Raynor",
        last_name: "Mowsdill",
        postImage: "http://dummyimage.com/173x100.png/dddddd/000000",
        summary:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        profilePhoto: "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
      },
      {
        id: 57,
        first_name: "Arlina",
        last_name: "Doucette",
        postImage: "http://dummyimage.com/160x100.png/ff4444/ffffff",
        summary:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        profilePhoto: "http://dummyimage.com/168x100.png/ff4444/ffffff",
      },
      {
        id: 58,
        first_name: "Stephanus",
        last_name: "Danielut",
        postImage: "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
        summary:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        profilePhoto: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
      },
      {
        id: 59,
        first_name: "Mendy",
        last_name: "Blanchflower",
        postImage: "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
        summary:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        profilePhoto: "http://dummyimage.com/112x100.png/cc0000/ffffff",
      },
      {
        id: 60,
        first_name: "Paul",
        last_name: "Dunbobin",
        postImage: "http://dummyimage.com/231x100.png/cc0000/ffffff",
        summary:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        profilePhoto: "http://dummyimage.com/207x100.png/ff4444/ffffff",
      },
    ]);

    res.status(201).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;
