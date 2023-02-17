// Define division, district, and thana data
const divisions = [  
  { name: "Barisal", districts: ["Barisal", "Bhola", "Jhalokati"] },
  { name: "Chittagong", districts: ["Chittagong", "Cox's Bazar", "Khagrachhari"] },
  { name: "Dhaka", districts: ["Dhaka", "Gazipur", "Narayanganj"] },
  { name: "Khulna", districts: ["Bagerhat", "Chuadanga", "Jessore"] },
  { name: "Mymensingh", districts: ["Jamalpur", "Netrokona", "Sherpur"] },
  { name: "Rajshahi", districts: ["Rajshahi", "Naogaon", "Chapai Nawabganj"] },
  { name: "Rangpur", districts: ["Lalmonirhat", "Nilphamari", "Rangpur"] },
  { name: "Sylhet", districts: ["Sylhet", "Moulvibazar", "Habiganj"] },
];


const districts = {};
districts["Dhaka"] = ["Dhaka", "Gazipur", "Narayanganj", "Manikganj", "Munshiganj", "Narsingdi", "Tangail", "Kishoreganj", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur"];
districts["Chittagong"] = ["Chittagong", "Cox's Bazar", "Khagrachhari", "Rangamati", "Bandarban", "Chandpur", "Comilla", "Brahmanbaria", "Lakshmipur", "Noakhali", "Feni"];
districts["Rajshahi"] =  ["Rajshahi", "Naogaon", "Chapai Nawabganj", "Joypurhat", "Pabna", "Bogra", "Sirajganj"];
districts["Khulna"] =  ["Khulna", "Jessore", "Satkhira", "Meherpur", "Narail", "Chuadanga", "Jhenaidah", "Magura", "Kushtia"];
districts["Barishal"] =  ["Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"];
districts["Sylhet"] =  ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"];
districts["Rangpur"] =  ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"];
districts["Mymensingh"] =  ["Mymensingh", "Jamalpur", "Sherpur", "Netrokona"];



const thanas = {};

thanas["Dhaka"] = [  "Gulshan",  "Banani",  "Mirpur",  "Uttara",  "Mohammadpur",  "Dhanmondi",  "Tejgaon",  "Mohakhali",  "Khilgaon",  "Motijheel",  "Sutrapur",  "Paltan",  "Kotwali",  "Badda",  "Cantonment",  "Turag",  "Demra",  "Shyampur",  "Keraniganj",  "Nawabganj",  "Savar",  "Ramna",  "Jatrabari",  "Hazaribagh",  "Pallabi",  "Rampura",  "Bangsal",  "Sabujbagh",  "Shah Ali",  "Shahbagh",  "Sher-e-Bangla Nagar",  "Tejgaon Industrial Area",  "Uttar Khan",];
thanas["Gazipur"] = [  "Gazipur Sadar",  "Kaliakair",  "Kapasia",  "Sreepur",  "Kaliganj",  "Tongi",];
thanas["Narayanganj"] = [  "Narayanganj Sadar",  "Sonargaon",  "Araihazar",  "Bandar",  "Rupganj",];
thanas["Manikganj"] = ["Manikganj Sadar", "Shibalaya", "Saturia", "Ghior"];
thanas["Munshiganj"] = ["Munshiganj Sadar", "Gazaria", "Sirajdikhan", "Tongibari"];
thanas["Narsingdi"] = ["Narsingdi Sadar", "Belabo", "Raipura", "Shibpur"];
thanas["Tangail"] = [  "Tangail Sadar",  "Gopalpur",  "Kalihati",  "Mirzapur",  "Nagarpur",  "Sakhipur",];
thanas["Kishoreganj"] = [  "Kishoreganj Sadar",  "Hossainpur",  "Itna",  "Karimganj",  "Katiadi",  "Kuliarchar",  "Mithamain",  "Nikli",  "Ostagram",  "Pakundia",  "Tarail",];
thanas["Faridpur"] = [  "Faridpur Sadar",  "Alfadanga",  "Bhanga",  "Boalmari",  "Charbhadrasan",  "Madukhali",  "Nagarkanda",  "Sadarpur",  "Saltha",];
thanas["Gopalganj"] = [  "Gopalganj Sadar",  "Kashiani",  "Kotalipara",  "Muksudpur",  "Tungipara",];
thanas["Madaripur"] = ["Madaripur Sadar", "Shibchar", "Kalkini"];
thanas["Rajbari"] = ["Rajbari Sadar", "Baliakandi", "Goalandaghat"];
thanas["Shariatpur"] = ["Shariatpur Sadar", "Damudya", "Naria"];

thanas["Chittagong"] = [  "Chittagong Sadar",  "Anwara",  "Boalkhali",  "Chandanaish",  "Fatikchhari",  "Hathazari",  "Lohagara",  "Mirsharai",  "Patiya",  "Rangunia",  "Raozan",  "Sandwip",  "Satkania",  "Sitakunda",];
thanas["Cox's Bazar"] = [  "Cox's Bazar Sadar",  "Chakaria",  "Kutubdia",  "Maheshkhali",  "Ramu",  "Teknaf",  "Ukhia",];
thanas["Khagrachhari"] = [  "Khagrachhari Sadar",  "Dighinala",  "Lakshmichhari",  "Mahalchhari",  "Manikchhari",  "Matiranga",  "Panchhari",  "Ramgarh",];
thanas["Rangamati"] = [  "Rangamati Sadar",  "Bagaichhari",  "Barkal",  "Juraichhari",  "Kaptai",  "Langadu",  "Nannerchar",  "Rajasthali",  "Rangunia",];
thanas["Bandarban"] = [  "Bandarban Sadar",  "Ali Kadam",  "Lama",  "Naikhongchhari",  "Rowangchhari",  "Ruma",  "Thanchi",];
thanas["Chandpur"] = [  "Chandpur Sadar",  "Faridganj",  "Haimchar",  "Haziganj",  "Kachua",  "Matlab North",  "Matlab South",  "Shahrasti",];
thanas["Comilla"] = [  "Comilla Sadar",  "Barura",  "Brahmanpara",  "Burichong",  "Chandina",  "Chauddagram",  "Daudkandi",  "Davidhar",  "Homna",  "Laksam",  "Langalkot",  "Meghna",  "Muradnagar",  "Nangalkot",  "Titas",];
thanas["Brahmanbaria"] = [  "Brahmanbaria Sadar",  "Akhaura",  "Bancharampur",  "Kasba",  "Nabinagar",  "Nasirnagar",  "Sarail",  "Shahbazpur Town",];
thanas["Lakshmipur"] = [  "Lakshmipur Sadar",  "Raipur",  "Ramganj",  "Ramgati",];
thanas["Noakhali"] = [  "Noakhali Sadar",  "Begumganj",  "Chatkhil",  "Companyganj",  "Hatiya",  "Kabirhat",  "Senbag",  "Sonaimuri",  "Subarnachar",];
thanas["Feni"] = [  "Feni Sadar",  "Chhagalnaiya",  "Daganbhuiyan",  "Parshuram",  "Fulgazi",  "Sonagazi",];




// Get references to the select elements
const divisionSelect = document.getElementById("division");
const districtSelect = document.getElementById("district");
const thanaSelect = document.getElementById("thana");

// Add options to the division select element
divisions.forEach((division) => {
  const option = document.createElement("option");
  option.value = division.name;
  option.textContent = division.name;
  divisionSelect.appendChild(option);
});

// Populate the district select element based on the selected division
divisionSelect.addEventListener("change", () => {
  const selectedDivision = divisionSelect.value;
  districtSelect.innerHTML = "";
  thanaSelect.innerHTML = "";
  if (selectedDivision) {
    const districtOptions = districts[selectedDivision];
    districtOptions.forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

// Populate the thana select element based on the selected district
districtSelect.addEventListener("change", () => {
  const selectedDistrict = districtSelect.value;
  thanaSelect.innerHTML = "";
  if (selectedDistrict) {
    const thanaOptions = thanas[selectedDistrict];
    thanaOptions.forEach((thana) => {
      const option = document.createElement("option");
      option.value = thana;
      option.textContent = thana;
      thanaSelect.appendChild(option);
    });
  }
});
