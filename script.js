// define districts and thanas as nested arrays
const districts = {
  Dhaka: ["Dhaka", "Gazipur", "Manikganj", "Munshiganj", "Narayanganj"],
  Chittagong: ["Chittagong", "Comilla", "Brahmanbaria", "Feni", "Noakhali"],
  Rajshahi: ["Rajshahi", "Bogra", "Joypurhat", "Naogaon", "Natore"],
  Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah"],
  Barishal: ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali"],
  Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
  Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Nilphamari"],
  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
};


const thanas = {
  Dhaka: {
    Dhaka: ["Uttara", "Mirpur", "Gulshan", "Dhanmondi", "Mohammadpur"],
    Gazipur: ["Tongi", "Kaliganj", "Kapasia"],
    Manikganj: ["Manikganj Sadar", "Saturia", "Shibalaya"],
    Munshiganj: ["Munshiganj Sadar", "Sirajdikhan"],
    Narayanganj: ["Narayanganj Sadar", "Bandar"]
  },
  Chittagong: {
    Chittagong: ["Chittagong Sadar", "Mirsharai", "Raozan"],
    Comilla: ["Comilla Sadar", "Brahmanpara", "Chandina"],
    Brahmanbaria: ["Brahmanbaria Sadar", "Kasba", "Nasirnagar"],
    Feni: ["Feni Sadar", "Daganbhuiyan", "Parshuram"],
    Noakhali: ["Noakhali Sadar", "Begumganj", "Hatiya"]
  },
  Rajshahi: {
    Rajshahi: ["Rajshahi Sadar", "Paba", "Durgapur"],
    Bogra: ["Bogra Sadar", "Adamdighi", "Sonatala"],
    Joypurhat: ["Joypurhat Sadar", "Akkelpur", "Kalai"],
    Naogaon: ["Naogaon Sadar", "Atrai", "Manda"],
    Natore: ["Natore Sadar", "Gurudaspur", "Lalpur"]
  },
  Khulna: {
    Khulna: ["Khulna Sadar", "Batiaghata", "Dumuria"],
    Bagerhat: ["Bagerhat Sadar", "Chitalmari", "Mollahat"],
    Chuadanga: ["Chuadanga Sadar", "Alamdanga", "Jibannagar"],
    Jessore: ["Jessore Sadar", "Abhaynagar", "Bagherpara"],
    Jhenaidah: ["Jhenaidah Sadar", "Kaliganj", "Shailkupa"]
  },
  Barishal: {
    Barishal: ["Barishal Sadar", "Bakerganj", "Hizla"],
    Barguna: ["Barguna Sadar", "Amtali", "Bamna"],
    Bhola: ["Bhola Sadar", "Burhanuddin", "Daulatkhan"],
    Jhalokati: ["Jhalokati Sadar", "Kathalia", "Nalchity"],
    Patuakhali: ["Patuakhali Sadar", "Bauphal", "Dashmina"]
  },
  Sylhet: {
    Sylhet: ["Sylhet Sadar", "Beanibazar", "Bishwanath"],
    Habiganj: ["Habiganj Sadar", "Ajmiriganj", "Bahubal"],
    Moulvibazar: ["Moulvibazar Sadar", "Barlekha", "Juri"],
    Sunamganj: ["Sunamganj Sadar", "Bishwamvarpur", "Chhatak"]
  },
    Rangpur: {
    Rangpur: ["Rangpur Sadar", "Badarganj", "Mithapukur"],
    Panchagarh: ["Panchagarh Sadar", "Boda", "Atwari"],
    Thakurgaon: ["Thakurgaon Sadar", "Baliadangi", "Haripur"],
    Dinajpur: ["Dinajpur Sadar", "Birampur", "Bochaganj"],
    Nilphamari: ["Nilphamari Sadar", "Dimla", "Kishoreganj"]
  },
  Mymensingh: {
  Mymensingh: ["Mymensingh Sadar", "Bhaluka", "Trishal"],
  Jamalpur: ["Jamalpur Sadar", "Islampur", "Dewanganj"],
  Sherpur: ["Sherpur Sadar", "Nalitabari", "Jhinaigati"]
}
  
  
  
 const divisions = Object.keys(thanas);

const divisionSelect = document.getElementById("division");
const districtSelect = document.getElementById("district");
const thanaSelect = document.getElementById("thana");

// Populate division options
divisions.forEach((division) => {
  const option = document.createElement("option");
  option.text = division;
  option.value = division;
  divisionSelect.add(option);
});

// Populate district options based on division selection
divisionSelect.addEventListener("change", () => {
  const selectedDivision = divisionSelect.value;
  const districts = Object.keys(thanas[selectedDivision]);

  // Remove previous district and thana options
  districtSelect.options.length = 1;
  thanaSelect.options.length = 1;

  // Populate district options
  districts.forEach((district) => {
    const option = document.createElement("option");
    option.text = district;
    option.value = district;
    districtSelect.add(option);
  });
});

// Populate thana options based on district selection
districtSelect.addEventListener("change", () => {
  const selectedDivision = divisionSelect.value;
  const selectedDistrict = districtSelect.value;
  const thanas = thanas[selectedDivision][selectedDistrict];

  // Remove previous thana options
  thanaSelect.options.length = 1;

  // Populate thana options
  thanas.forEach((thana) => {
    const option = document.createElement("option");
    option.text = thana;
    option.value = thana;
    thanaSelect.add(option);
  });
});


