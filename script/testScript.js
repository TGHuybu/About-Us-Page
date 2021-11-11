// Tên thành viên
var memName =[]

// Bio thành viên
var slideContent = ['eeeeeeeeeeee',
                    'aaaaaaaaaaaa', 
                    'lmaolmaolmaolmaolmao', 
                    'ayayayayayayayayay', 
                    'awdawdadwaadwd']

// Hình ảnh thành viên
var imageSauce = ['avtTest1.jpg', 'avtTest2.png', 'avtTest3.jpg', 'avtTest4.jpg']

// Ngày sinh thành viên
var dateOBirth = []

// Facebook thành viên
var socialLink = []

var count = 0
/* 
0: Nhóm trưởng
1: TV 1
2: TV 2
3: TV 3
4: TV 4
*/

const buttonRight = document.getElementById("next")
buttonRight.addEventListener("click", goForward)

const buttonLeft = document.getElementById("back")
buttonLeft.addEventListener("click", goBackward)

function goForward() {
    var avatar = document.getElementById("image")
    var name = document.getElementById("name")
    var birthDay = document.getElementById("dob")
    var socialMedia = document.getElementById("fb-page")
    var content = document.getElementById("bio")
    count++
    if (count === slideContent.length) {
        count = 0
    }
    content.innerHTML = slideContent[count]
    avatar.src = imageSauce[count]
    console.log(count)
}

function goBackward() {
    var avatar = document.getElementById("image")
    var name = document.getElementById("name")
    var birthDay = document.getElementById("dob")
    var socialMedia = document.getElementById("fb-page")
    var content = document.getElementById("bio")
    count--
    if (count < 0) {
        count = slideContent.length - 1
    }
    content.innerHTML = slideContent[count]
    avatar.src = imageSauce[count]
    console.log(count)
}