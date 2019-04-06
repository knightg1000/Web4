document.querySelector('#myForm').addEventListener('submit', save);
function save(e) {
    e.preventDefault();
    let Subject = document.querySelector('#Subject');
    let Name = document.querySelector('#Name');
    let Phone = document.querySelector('#Phone');
    let Email = document.querySelector('#Email');
    if (!validateForm(Subject, Name, Phone, Email)) {
        return false;
      }
      var Detail = {
        subject: Subject,
        name: Name,
        phone: Phone,
        email: Email
      }
      console.log(Detail);
}