import MainLayout from "../layout/main-layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactMe() {
  const [inputFieldData, setInputFieldData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  function handleFillInput(e) {
    const { name, value } = e.target;
    return setInputFieldData({ ...inputFieldData, [name]: value });
  }

  function formIsFilled() {
    return Object.values(inputFieldData).every((str) => str !== "");
  }

  const valueInput = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_522znnn", "template_f7en2h9", valueInput.current, {
        publicKey: "XsovXgWru8IkDVyb0",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          valueInput.current.reset();
          alert("Pesan Telah Berhasil Dikirim!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Terjadi kesalahan, coba lagi.");
        }
      );
  }

  return (
    <>
      <head>
        <title>Contact | Portfolio Galuh Panca Wirasa</title>
        <meta
          name="description"
          content="Hubungi saya untuk kerja sama proyek, freelance, atau peluang kerja di bidang pengembangan web. Saya siap membantu Anda membangun solusi digital yang efektif."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Kontak | Portfolio Galuh Panca Wirasa"
        />
        <meta
          property="og:description"
          content="Tertarik bekerja sama? Kirim pesan langsung untuk diskusi proyek website, aplikasi, atau pengembangan digital lainnya."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </head>
      <MainLayout propsTitle="Contact">
        <div className="mt-10 text-slate-200 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 sm:mx-10">
          {/* <div>
            <h1 className="font-bold text-2xl mb-5">Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.957053941108!2d106.95862307434643!3d-6.399535693591068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699540600a786b%3A0xf238a808d2e40179!2spenjahit%20galuh!5e0!3m2!1sid!2sid!4v1737379001599!5m2!1sid!2sid"
              width="600"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-xl"
            ></iframe>
          </div> */}
          <div className="mt-14">
            <h1 className="font-bold text-2xl mb-10 text-center">
              Contact Form
            </h1>
            <form ref={valueInput} onSubmit={sendEmail}>
              <div className="flex flex-wrap justify-around max-[640px]:flex-col max-[640px]:gap-y-4">
                <div className="basis-5/12">
                  <label
                    htmlFor=""
                    className="font-semibold text-lg mb-2 block"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md h-10 px-3 text-slate-200 font-medium bg-slate-600"
                    placeholder="Jhon Doe"
                    name="user_name"
                    onChange={handleFillInput}
                    required
                  />
                </div>
                <div className="basis-5/12">
                  <label
                    htmlFor=""
                    className="font-semibold text-lg mb-2 block"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md h-10 px-3 text-slate-200 font-medium bg-slate-600"
                    placeholder="jhonDoe544@gmail.com"
                    name="user_email"
                    onChange={handleFillInput}
                    required
                  />
                </div>
                <div className="basis-2/3 mt-5 max-[640px]:mt-0">
                  <label
                    htmlFor=""
                    className="font-semibold text-lg mb-2 block"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full h-32 rounded-md p-3 text-slate-200 font-medium bg-slate-600"
                    placeholder="Message"
                    onChange={handleFillInput}
                    required
                  />
                </div>
              </div>
              <button
                className="text-lg font-bold bg-slate-500 rounded-md mt-5 hover:bg-slate-600 py-1 px-5 disabled:cursor-not-allowed"
                type="submit"
                disabled={!formIsFilled()}
              >
                Send
              </button>
            </form>
          </div>

          <div className="flex justify-evenly mt-[43px] items-center max-[640px]:flex-col max-[640px]:gap-y-7">
            <h1 className="font-bold text-2xl text-center">Find Me On</h1>
            <div className="flex justify-around items-center w-10/12">
              <a
                className="flex justify-center"
                href="https://web.facebook.com/galuh.panca.79"
              >
                <img
                  src="/images/icon-facebook.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </a>
              <a
                className="flex justify-center"
                href="https://www.instagram.com/galuhpncwirasa_/"
              >
                <img
                  src="/images/icon-instagram.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </a>
              <a
                className="flex justify-center"
                href="https://www.linkedin.com/"
              >
                <img
                  src="/images/icon-linkedin.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </a>
              <a
                className="flex justify-center"
                href="https://github.com/GaluhPncWirs"
                target="_blank"
              >
                <img
                  src="/images/github-mark-white.png"
                  className="w-4/6 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/5"
                />
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
