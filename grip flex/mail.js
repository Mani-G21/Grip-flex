const firebaseConfig = {
    apiKey: "AIzaSyBKm3pjZFIZiKJXZ_zprFy-uTGeows5E_M",
    authDomain: "gripflex-a7915.firebaseapp.com",
    databaseURL: "https://gripflex-a7915-default-rtdb.firebaseio.com",
    projectId: "gripflex-a7915",
    storageBucket: "gripflex-a7915.appspot.com",
    messagingSenderId: "887078322627",
    appId: "1:887078322627:web:5e4976f21a1b9f9b0cbd76"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //refernce for database
  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    var imageUrl = urlParams.get('image'); // Get image URL from the query parameter
    var itemname = urlParams.get('product'); // Get product name from the query parameter
    var price = urlParams.get('price');
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var addressdetails = getElementVal("addressdetails");
    var contactdetails = getElementVal("contactdetails");
    var number = getElementVal("number");
    var paymentoptions = getElementVal("paymentoptions");
    

    saveMessages(imageUrl, itemname, price,  fname, lname, addressdetails, contactdetails, number, paymentoptions);
  }

  const saveMessages = (imageUrl, itemname, price, fname, lname, addressdetails, contactdetails, number, paymentoptions) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        imageUrl: imageUrl,     // Save the image URL
        itemname: itemname,    // Save the product name
        price: price, 
        fname: fname,
        lname: lname,
        addressdetails: addressdetails,
        contactdetails: contactdetails,
        number: number,
        paymentoptions: paymentoptions,
    });
  }
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };