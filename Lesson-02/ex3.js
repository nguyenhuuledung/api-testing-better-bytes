// a. Khai báo chiều cao của bạn (cm)
const chieuCao = 172;
let canNangLyTuong = chieuCao % 100 * 9 / 10;
let canNangToiDa = chieuCao % 100;
let canNangToiThieu = chieuCao % 100 * 8 / 10;
// b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng. 
console.log("Cân cân nặng lý tưởng: " + canNangLyTuong + "; " + "Cân nặng tối đa: " + canNangToiDa + "; " + "Cân nặng tối thiểu: " + canNangToiThieu + ".");