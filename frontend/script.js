

const ENDPOINT = `http://localhost:8080`;
// Memilih elemen DOM
const el = (selector) => document.querySelector(selector);
const [
  todoNav,
  searchNav,
  HomeNav,
  navProfile,
  searchcon,
  displayProfile,
  containerblog,
  Todolist,
  addtodo,
  Close,
  SideBarTodo,
  editProfile,
  sidebareditprof,
  postNav,
  absolute,
  uploadImgPost,
  ClosePost,
  imgUploadPost,
  uploadimgtext,
  containerPost,
  btnPost,
  navigasi,
  loginsign,
  profileimgpost,
  ppname,
  imgmodalpost,
  ppmodal,
  namemodal,
  usertextpost,
  comments,
  btnComment,
  inputtodo,
  BtnTodo,
  yourtodolist,
  deletemaintodo,
  infoacc,
  imgcoke,
  kuncung,
  mapHasilSearch,
  search,
] = [
  ".todo-nav",
  ".search-nav",
  ".Home-nav",
  ".navProfile",
  ".center",
  ".display-profile",
  ".container-blog",
  ".Todo-list",
  ".add-todo",
  ".close",
  ".sidebar-todo",
  ".edit-profile",
  ".sidebar-editprof",
  ".post-nav",
  ".absolute",
  ".upload-img-post",
  ".close-post",
  ".img-upload-post",
  ".upload-img-text",
  ".container-post",
  ".btn-post",
  ".navigasi",
  ".login-sign",
  ".profile-img-post",
  "#pp-name",
  ".img-modal-post",
  "#pp-modal",
  ".name-modal",
  ".user-text-post",
  "#comments",
  "#btn-comment",
  ".inputtodo",
  ".btn-submit-todo",
  ".cuki",
  ".deletemaintodo",
  ".info-acc",
  ".img-coke",
  ".kuncung",
  ".map-hasilSearch",
  "#search",
].map((selector) => el(selector));

// loading
let loading = false;

if (!loading) {
  document.querySelector(".blog").innerHTML = `
  <div class="conimage">
  <div class="profile-con-inBlog">
      <div src=""  class="profile-sekeleton"></div>
      <div class="col">

          <h5 class="name-sekeleton"></h5>
          <p class="bio-sekeleton"></p>
      </div>
  </div>
  <div class="blog-sekeleton" ></div>
<div class="content-tulis-and-like">
  <div class="com-like-waktu">
      <div class="com-like-sekeleton">
      </div>
      <p class="time-sekeleton"></p>
      <p class="time-sekeleton"></p>
  </div>
  <div class="tulis">
      <h6 class="text-content-sekeleton"></h6>
  </div>
</div>
</div>
</div>

<div class="conimage">
  <div class="profile-con-inBlog">
      <div src=""  class="profile-sekeleton"></div>
      <div class="col">

          <h5 class="name-sekeleton"></h5>
          <p class="bio-sekeleton"></p>
      </div>
  </div>
  <div class="blog-sekeleton" ></div>
<div class="content-tulis-and-like">
  <div class="com-like-waktu">
      <div class="com-like-sekeleton">
      </div>
      <p class="time-sekeleton"></p>
      <p class="time-sekeleton"></p>
  </div>
  <div class="tulis">
      <h6 class="text-content-sekeleton"></h6>
  </div>
</div>
</div>
</div>
`;
}












// class active untuk navigasi
const all_nav_link = document.querySelectorAll(".nav-coy");
navigasi.addEventListener("click", (e) => {
  if (
    e.target.className == "Home-nav nav-coy" ||
    "search-nav nav-coy" ||
    "todo-nav nav-coy" ||
    "post-nav nav-coy" ||
    "navProfile nav-coy"
  ) {
    all_nav_link.forEach((el) => {
      if (el.classList.contains("ontap")) {
        el.classList.remove("ontap");
      }
    });
    e.target.classList.add("ontap");
  }
});
let token;

const closePost = document.querySelectorAll(".close-post");
// Menambahkan event listener ke elemen searchNav dan menampilkan/menyembunyikan searchcon
searchNav.addEventListener("click", () => {
  if (token == true) {
    searchcon.classList.toggle("active");
  } else {
    loginsign.style.display = "flex";
    containerblog.style.display = "none";
    getprofile();
    Todolist.style.display = "none";
  }
});

// Menambahkan event listener ke elemen dokumen dan mengecek apakah user mengklik di luar elemen searchNav dan searchcon untuk menutup searchcon
document.addEventListener("click", (e) => {
  if (![searchNav, searchcon].some((el) => el.contains(e.target))) {
    searchcon.classList.remove("active");
    
  }
});

// Menambahkan event listener ke elemen HomeNav untuk menampilkan blog dan menyembunyikan todolist dan displayProfile
HomeNav.addEventListener("click", () => {
  [
    containerblog,
    Todolist,
    displayProfile,
    sidebareditprof,
    absolute,
    loginsign,
  ].forEach((el) => (el.style.display = "none"));
  containerblog.style.display = "block";
 
});

// Menambahkan event listener ke elemen todoNav untuk menampilkan todolist dan menyembunyikan blog dan displayProfile
todoNav.addEventListener("click", () => {
  [
    containerblog,
    Todolist,
    displayProfile,
    sidebareditprof,
    absolute,
    loginsign,
  ].forEach((el) => (el.style.display = "none"));
  if (token == true) {
    Todolist.style.display = "flex";
  } else {
    loginsign.style.display = "flex";
  }
  
});



  

// Menambahkan event listener ke elemen navProfile untuk menampilkan displayProfile dan menyembunyikan blog dan todolist

navProfile.addEventListener("click", () => {
  [containerblog, Todolist, displayProfile, sidebareditprof, absolute].forEach(
    (el) => (el.style.display = "none")
  );
  iflogin();
});
const iflogin = () => {
  if (token == true) {
    displayProfile.style.display = "block";
    getprofile();
  } else {
    loginsign.style.display = "flex";
  }
};

// side bar todo
addtodo.addEventListener("click", () => {
  SideBarTodo.classList.toggle("active-side-todo");
});

Close.addEventListener("click", () => {
  SideBarTodo.classList.remove("active-side-todo");
});

editProfile.addEventListener("click", () => {
  [containerblog, Todolist, displayProfile, absolute].forEach(
    (el) => (el.style.display = "none")
  );
  sidebareditprof.style.display = "flex";
});

postNav.addEventListener("click", () => {
  [Todolist, displayProfile, loginsign].forEach(
    (el) => (el.style.display = "none")
  );

  if (token == true) {
    absolute.style.display = "flex";
    containerblog.style.display = "block";
  } else {
    loginsign.style.display = "flex";
    containerblog.style.display = "none";
  }
});

// search user
const alluser = async () => {
  const res = await fetch(`${ENDPOINT}/infouser`);

  const data = await res.json();
  let str = "";
  data.map((res) => {
    str += htmlsearch(res);
  });
  mapHasilSearch.innerHTML = str;
};

search.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputSearch = document.querySelector(".search-input").value;

  const res = await fetch(`${ENDPOINT}/infouser/${inputSearch}`);
  const data = await res.json();
  if (data == null) {
    mapHasilSearch.innerHTML = "User tidak ditemukan";
  }
  mapHasilSearch.innerHTML = htmlsearch(data);
});

alluser();

const htmlsearch = (e) => {
  return ` <div class="user-search">
  <div class="pemisah">
  <img src="${e.image}">
        <div class="search-user-name-bio">
           <h6>${e.name}</h6>
           <p>${e.bio}</p>
        </div>
        </div>
        <div class="action-follow-friend" data-image="${e.image}" data-name="${e.name}" data-web="${e.web}" data-bio="${e.bio}" data-sosials="${e.sosials}">
           <i class="bi bi-people-fill follow"></i>
           <i class="bi bi-info-circle"></i>
        </div>
        </div>
  `;
};


mapHasilSearch.addEventListener("click",(e) => {
  let userinfo = {
    name:e.target.parentElement.dataset.name,
    bio:e.target.parentElement.dataset.bio,
    web:e.target.parentElement.dataset.web,
    sosials:e.target.parentElement.dataset.sosials,
    image:e.target.parentElement.dataset.image
  }
  if(e.target.className == "bi bi-info-circle"){
    displayinfoprofile([userinfo])
    searchcon.classList.remove("active");
  }
})





























let cropper;
uploadImgPost.addEventListener("change", async function (e) {
  let path = URL.createObjectURL(e.target.files[0]);
  imgUploadPost.src = path;

  uploadimgtext.style.display = "flex";
  containerPost.style.display = "none";
});

let profileuser;
const profileusers = (data) => {
  profileuser = data;
  ppname.innerHTML = data.name;
  profileimgpost.src = data.image;
};

absolute.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector('.load-pit').style.display = 'block'
  //  cropper
  // let canvas = cropper.getCroppedCanvas({
  //   width: 500,
  //  height:500,
  // }).toDataURL()

  // var bleb = dataURItoBlob(canvas);

  const input_post = document.querySelector(".input-post");

  const fromdata = new FormData();
  fromdata.append("postText", input_post.value);
  fromdata.append("bio", profileuser.bio);
  fromdata.append("pp", profileuser.image);
  fromdata.append("email", profileuser.email);
  fromdata.set("nameofpost", profileuser.name);
  fromdata.append("image", uploadImgPost.files[0], randomString(20) + ".png");


    fetch(`${ENDPOINT}/YourPost`, {
      method: "POST",
      body: fromdata,
    })
      .then((res) => res.json())
      .then((data) => {
        document.querySelector('.load-pit').textContent ="selesai!!"
        location.reload();
      })
      .catch((err) => console.log(err));
  });


closePost.forEach((e) => {
  e.addEventListener("click", () => {
    window.location = "";
  });
});

// <- get method for map content-Blog -> \\

const blog = document.querySelector(".blog");

const mappContentBlog = async () => {
  let respon = await fetch(`${ENDPOINT}/YourPost`);

  let data = await respon.json();
  let el = "";
  data.map((e) => {
    el += innerContentBlog(e);
    loading = true;
  });
  blog.innerHTML = el;
};








// coments
let userinfors;
let clicked = false
let clicle = false
blog.addEventListener("click", (e) => {
  const userinfor = {
    image: e.target.parentElement.dataset.image,
    filter: e.target.parentElement.dataset.filter,
    name: e.target.parentElement.dataset.name,
    pp: e.target.parentElement.dataset.pp,
    fulltext: e.target.parentElement.dataset.text,
    id: e.target.parentElement.dataset.id,
  };
  userinfors = userinfor;

  displayComments(userinfor);
  // liketot(userinfor)
  
  if(e.target.className == 'bi bi-heart-fill'){
    alert('next fitur coy mumet..')
  }



  if (e.target.className == "bi bi-chat-right-fill") {
    let cuy = e.target.parentElement.dataset.text.split(" ", 4).join(" ");
    let text = cuy + `<a class="slengkapnya">selengkapnya</a>`;

    pengdisplayan(userinfor, text);
    hapuspostfun(userinfor);
    btnComment.addEventListener("click", (e) => {
      Commentos(userinfor);
    });
  }
});



const mapcom = document.querySelector(".map-comment");
let coek = "";
const displayComments = async (e) => {
  const res = await fetch(`${ENDPOINT}/comments`);
  const data = await res.json();
  let datacomm = "";
  data
    .filter((resp) => {
      if (resp.filter == e.filter) {
        return resp;
      }
      return resp.filter === e.filter;
    })
    .map((data) => {
      datacomm += commentshtml(data);
    });
  mapcom.innerHTML = datacomm;

  const resp = await data.filter((resp) => {
    if (resp.filter == e.filter) {
      return resp;
    }
    return resp.filter === e.filter;
  });
  coek = resp.length += 1;
};
const Commentos = async (userinfor) => {
  if (!comments.value == "") {
    const res = await fetch(`${ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: userinfor.filter,
        nameofcomment: profileuser.name,
        ppofcomment: profileuser.image,
        comment: comments.value,
        email: profileuser.email,
        bio: profileuser.bio,
        web: profileuser.web,
      }),
    }).then(() => {
      displayComments(userinfor);
      fetch(`${ENDPOINT}/putcommmany/${userinfor.filter}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentar: `${coek}`,
        }),
      });
      console.log(coek);
      comments.value = "";
    });
  }
};

// .del-comment
mapcom.addEventListener("click", (e) => {
  const userinformasi = [
    {
      id: e.target.dataset.id,
      name: e.target.dataset.name,
      image: e.target.dataset.image,
      bio: e.target.dataset.bio,
      web: e.target.dataset.web,
    },
  ];

  if (e.target.className == "bi bi-trash del-comment") {
    fetch(`${ENDPOINT}/comments/${userinformasi[0].id}`, {
      method: "DELETE",
      body: null,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log(coek)
      fetch(`${ENDPOINT}/putcommmany/${userinfors.filter}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentar: `${coek -= 2}`,
        }),
      });
      displayComments(userinfors)
    });
  }
  if (e.target.className == "img-info") {
    displayinfoprofile(userinformasi);
  }
});

const pengdisplayan = (userinfor, text) => {
  const modalPost = document.querySelector(".modal-post");
  if (profileuser.name == userinfor.name) {
    const hapuspost = document.createElement("h3");
    hapuspost.textContent = "Hapus Post";
    hapuspost.classList.add("hapus-post");
    titik3.appendChild(hapuspost);
    infoacc.style.display = "none";
    const editPost = document.createElement("h3");
    editPost.classList.add("edit-post");
    editPost.textContent = "Edit Post";
    titik3.appendChild(editPost);
    displayComment = "del-comment";
  }

  modalPost.style.display = "flex";
  imgmodalpost.src = userinfor.image;
  ppmodal.src = userinfor.pp;
  namemodal.innerHTML = userinfor.name;
  console.log(userinfor.fulltext)
  const sbc = userinfor.fulltext.split(" ", 4);
  if (sbc.length >= 4) {
    usertextpost.innerHTML = text;
    const slengkapnya = document.querySelector(".slengkapnya");
  slengkapnya.addEventListener("click", () => {
    usertextpost.innerHTML = userinfor.fulltext;
    imgcoke.style.overflowY = "scroll";
  });
  } else {
    usertextpost.innerHTML = userinfor.fulltext;
  }
  
  
};

const innerContentBlog = (e) => {
  
  return `
  <div class="conimage">
          <div class="profile-con-inBlog">
              <img src="${ENDPOINT}/${e.pp}"  class="profile-inBlog">
              <div class="col">

                  <h5>${e.nameofpost}</h5>
                  <p>${e.bio}</p>
              </div>
          </div>
          <img src="${ENDPOINT}/${e.image}" class="img-blog" >
      <div class="content-tulis-and-like">
          <div class="com-like-waktu">
              <div class="com-like" data-id="${e._id}" data-text="${e.postText}" data-pp="${e.pp}" data-name="${e.nameofpost}" data-image="${e.image}" data-filter="${e.filter}">
                  <i class="bi bi-heart-fill" id="${e.filter}" data-click="click"><span>${e.likes}</span></i>
                  <i class="bi bi-chat-right-fill"><span>${e.comments}</span></i>
              </div>
              <p>${e.date}</p>
          </div>
          <div class="tulis">
              <h6>${e.postText}</h6>
          </div>
      </div>
  </div>`;
};

let displayComment = "none";
const commentshtml = (e) => {
  if (e.nameofcomment == profileuser.name) {
    displayComment = "del-comment";
  }
  return `  <div class="comments-user-post">
  <i class="bi bi-trash ${displayComment}" data-id="${e._id}"></i>
  <img src="${ENDPOINT}/${e.ppofcomment}" data-id="${e._id}" data-image="${e.ppofcomment}" data-name="${e.nameofcomment}"  data-web="${e.web}" data-bio="${e.bio}" class="img-info">
  <div class="text-comm">
      <p><span>${e.nameofcomment}</span>,${e.comment}</p>
      <div class="flux">
      <h6>${e.date}</h6>
      </div>
      </div>
</div>`;
};

mappContentBlog();

const hapuspost = document.querySelector(".hapus-post");

const hapuspostfun = (data) => {
  titik3.addEventListener("click", (e) => {
    if (e.target.className == "hapus-post") {
      fetch(`${ENDPOINT}/YourPost/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: `${data.image}`,
          filter: data.filter,
        }),
      }).then(location.reload());
    }
    if (e.target.className == "info-acc") {
      fetch(`${ENDPOINT}/infouser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
        }),
      })
        .then((res) => res.json())
        .then((datas) => {
          displayinfoprofile(datas);
        });
    }
    if (e.target.className == "edit-post") {
      const veditinputpost = document.querySelector(".v-editinput-post");
      const ppnameedit = document.querySelector(".ppname-edit");
      const kun = document.querySelector(".kun");
      const imgvedit = document.querySelector(".img-v-edit");
      const btnpostvedit = document.querySelector(".btn-post-vedit");
      ppnameedit.innerHTML = data.name;
      kun.src = data.pp;
      imgvedit.src = data.image;
      kuncung.style.display = "flex";
      veditinputpost.value = data.fulltext;

      btnpostvedit.addEventListener("click", () => {
        fetch(`${ENDPOINT}/putPost/${data.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postText: veditinputpost.value,
          }),
        }).then(() => {
          location.reload();
        });
      });
    }
  });
};

const displayinfoprofile = async (datas) => {
  const modalPost = document.querySelector(".modal-post");
  [containerblog, Todolist, displayProfile, sidebareditprof, absolute].forEach(
    (el) => (el.style.display = "none")
  );
  modalPost.style.display = "none";
  displayProfile.style.display = "block";
  let ngeok = datas[0].name == profileuser.name;
  ngeok ? console.log("displayed") : (editProfile.style.display = "none");

  // map nama-web-bio-pp
  let data = datas[0];
  profileName.innerHTML = data.name;
  document.querySelector(".pp-profile").src = data.image;
  Bio.innerHTML = data.bio;
  Web.innerHTML = data.web;
  Web.href = data.web;

  // map konten-kontennya
  let loadnopostiio = false
  let respon = await fetch(`${ENDPOINT}/YourPost`);

  let datao = await respon.json();
  let youcontent = "";
  let ciuok = datao.filter((dataso) => {
      if (dataso.nameofpost == data.name) {
        return data;
      }
      return dataso.nameofpost === data.name;
    })
    .map((dataso) => {
      youcontent += mappingpostuserp(dataso);
    });
    let ng = ciuok.length == 0
    yourcontent.innerHTML = youcontent;
    if(ng){
      if(!loadnopostiio){
        yourcontent.style.border = "none"
        yourcontent.innerHTML = `
        
        <div class="loadnopost">
        <img src="./img/animation_500_lgtdgvra.gif" class="loadpost" alt="" srcset="">
        <h3 class="ribet">${data.name} haven’t published any post yet</h3>
        </div>
        <h3 class="ribot">${data.name} haven’t published any post yet</h3>
        `
      }
    }else{
      loadnopostiio = true
    }
};

function dataURItoBlob(dataURI) {
  var byteString;

  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = unescape(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

const randomString = (oi) => {
  let random = "";
  let characther =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < oi; i++) {
    random += characther.charAt(Math.floor(Math.random() * characther.length));
  }
  return random;
};

const animate_signup_in = document.querySelector(".animate-signup-in");
const route_signup_sign = document.querySelectorAll(".route-signup-sign");

route_signup_sign.forEach((el) => {
  el.addEventListener("click", () => {
    animate_signup_in.classList.toggle("animate");
  });
});

// todo list

BtnTodo.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputtodo.value !== "") {
    fetch(`${ENDPOINT}/todo-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameofpost: profileuser.name,
        bio: profileuser.bio,
        pp: profileuser.image,
        postText: inputtodo.value,
        email: profileuser.email,
      }),
    }).then(() => {
      inputtodo.value = "";
      getprofile();
    });
  }
});

const tohtmltodo = (e) => {
  return `
<div class="todo" data-id="${e._id}">
  <h5 class="finish" id="${e.isfinish}">${e.postText}</h5>  
  <i class="bi bi-pencil mrgn-left-5" ></i>
  <i class="bi bi-trash-fill"></i>
</div>
  `;
};

// delete N edit
yourtodolist.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.parentElement.dataset.id;
  const finish = e.target.id;
  const btnEdittodo = e.target.className == "bi bi-pencil mrgn-left-5";
  const btnhspustodo = e.target.className == "bi bi-trash-fill";
  const isfinish = e.target.className == "finish";
  if (btnhspustodo) {
    fetch(`${ENDPOINT}/todo-list/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    }).then(getprofile());
  }

  if (btnEdittodo) {
    const h5el = e.target.previousElementSibling;
    const textareaElement = document.createElement("input");
    textareaElement.classList.add("input-pasmode-edit");
    textareaElement.value = h5el.textContent;

    h5el.replaceWith(textareaElement);

    const btnedit = e.target;
    const btndelete = e.target.nextElementSibling;
    btndelete.style.display = " none";
    const button = document.createElement("button");
    button.classList.add("bi-pencil");

    btnedit.replaceWith(button);
    button.addEventListener("click", () => {
      fetch(`${ENDPOINT}/todo-list/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postText: textareaElement.value,
        }),
      }).then(() => {
        textareaElement.replaceWith(h5el);
        h5el.textContent = textareaElement;
        button.replaceWith(btnedit);
        btndelete.style.display = "block";
        getprofile();
      });
    });
  }

  if (isfinish) {
    let isfinishs = finish == "false" ? "true" : "false";
    fetch(`${ENDPOINT}/todo-list/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isfinish: isfinishs,
      }),
    }).then(() => {
      getprofile();
    });
  }
});

// async function image_to_base64(file) {
//   let result_base64 = await new Promise((resolve) => {
//       let fileReader = new FileReader();
//       fileReader.onload = (e) => resolve(fileReader.result);
//       fileReader.onerror = (error) => {
//           console.log(error)
//           alert('An Error occurred please try again, File might be corrupt');
//       };
//       fileReader.readAsDataURL(file);
//   });
//   return result_base64;
// }

// async function process_image(file, min_image_size = 300) {
//   const res = await image_to_base64(file);
//   if (res) {
//       const old_size = calc_image_size(res);
//       if (old_size > min_image_size) {
//           const resized = await reduce_image_file_size(res);
//           const new_size = calc_image_size(resized)
//           console.log('new_size=> ', new_size, 'KB');
//           console.log('old_size=> ', old_size, 'KB');
//           return resized;
//       } else {
//           console.log('image already small enough')
//           return res;
//       }

//   } else {
//       console.log('return err')
//       return null;
//   }
// }

// async function reduce_image_file_size(base64Str, MAX_WIDTH = 450, MAX_HEIGHT = 450) {
//   let resized_base64 = await new Promise((resolve) => {
//       let img = new Image()
//       img.src = base64Str
//       img.onload = () => {
//           let canvas = document.createElement('canvas')
//           let width = img.width
//           let height = img.height

//           if (width > height) {
//               if (width > MAX_WIDTH) {
//                   height *= MAX_WIDTH / width
//                   width = MAX_WIDTH
//               }
//           } else {
//               if (height > MAX_HEIGHT) {
//                   width *= MAX_HEIGHT / height
//                   height = MAX_HEIGHT
//               }
//           }
//           canvas.width = width
//           canvas.height = height
//           let ctx = canvas.getContext('2d')
//           ctx.drawImage(img, 0, 0, width, height)
//           resolve(canvas.toDataURL()) // this will return base64 image results after resize
//       }
//   });
//   return resized_base64;
// }

// function calc_image_size(image) {
//   let y = 1;
//   if (image.endsWith('==')) {
//       y = 2
//   }
//   const x_size = (image.length * (3 / 4)) - y
//   return Math.round(x_size / 1024)
// }

// cropper = new Cropper(imgUploadPost);
// let source = process_image(e.target.files[0]);

// const res = await image_to_base64(e.target.files[0])
//   console.log(path)
//   if (res) {
//       const path = await reduce_image_file_size(res);
//       console.log(path)
//       var blob = dataURItoBlob(path);
//       var objectURL = URL.createObjectURL(blob);

//       btnPosting(objectURL);
//   } else {
//       console.log('return err')
//   }
let currentTime = new Date();
let menit = currentTime.getMinutes();
let pen0 = "";
if (menit <= 9) {
  pen0 = 0;
}

let time = currentTime.getHours() + "." + pen0 + menit;
document.querySelector(".jam-tdo").innerHTML = time;
let psm = "";

let jam = currentTime.getHours();
if (jam >= 3 && jam <= 10) {
  psm = "Good Moring";
} else if (jam >= 10 && jam <= 14) {
  psm = "Good Afternoon";
} else if (jam >= 14 && jam <= 18) {
  psm = "Good Evening";
} else if (jam >= 18 || jam <= 3) {
  psm = "Good Night";
}

document.querySelector(".psm").innerHTML = psm;

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function (e) {
  if (this.checked) {
    let isfinishs = true;
    fetch(`${ENDPOINT}/todo-list/${e.target.dataset.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isfinish: isfinishs,
      }),
    }).then(() => {
      getprofile();
    });
  } else {
    console.log(false);
    fetch(`${ENDPOINT}/todo-list/${e.target.dataset.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isfinish: false,
      }),
    }).then(() => {
      getprofile();
    });
  }
});
~

deletemaintodo.addEventListener('click',() => {
    fetch(`${ENDPOINT}/todo-list/${checkbox.dataset.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
      },
      body:null
    }).then(() => {
      mainTodo.style.display = 'block'
      getprofile()
      mun.forEach((mun) => {
        mun.style.display = 'none'
       })
       
    })
  
})