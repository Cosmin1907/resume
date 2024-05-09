function sendMail(contactForm) {
    var templateParams = {
        "from_name": contactForm.name.value,
        "email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
      };
      
      emailjs.send("service_dz6rzqc","template_th0uhfp", templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      return false;
}