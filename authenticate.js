function workIt(form){
    if(form.name.value == "Ashu" && form.psword.value == "123"){
        window.open('movie.html')
    } else if(form.name.value === '' || form.psword.value === ''){
        alert('please fill in all input fields')
    } else {
        alert('either userName or password is incorrect!')
    }
}