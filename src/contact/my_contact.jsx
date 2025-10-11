import MainLayout from "../layout/main-layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LayoutModalBox from "../layout/modalBox";

export default function ContactMe() {
  const [inputFieldData, setInputFieldData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [handleClickSendEmail, setHandleClickSendEmail] = useState(false);
  const [modalSendEmail, setModalSendEmail] = useState({
    sendEmailSuccess: false,
    sendEmailFailed: false,
  });
  const valueInput = useRef();

  function handleFillInput(e) {
    const { name, value } = e.target;
    return setInputFieldData({ ...inputFieldData, [name]: value });
  }

  function formIsFilled() {
    return Object.values(inputFieldData).every((str) => str !== "");
  }

  function sendEmail(e) {
    e.preventDefault();
    setHandleClickSendEmail(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_CREDENTIAL_SERVICES_KEYS,
        import.meta.env.VITE_CREDENTIAL_TEMPLATE_EMAIL_KEYS,
        valueInput.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          valueInput.current.reset();
          setModalSendEmail({
            sendEmailSuccess: true,
            sendEmailFailed: false,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setModalSendEmail({
            sendEmailSuccess: false,
            sendEmailFailed: true,
          });
        }
      );
  }

  return (
    <>
      <Helmet>
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
      </Helmet>
      <MainLayout propsTitle="Contact">
        <div className="text-slate-200 max-[640px]:mt-24 max-[640px]:ml-11 max-[640px]:mx-0 max-[640px]:pr-5 sm:mx-10 ">
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

          <div className="flex justify-evenly mt-12 items-center flex-col gap-y-7">
            <h1 className="font-bold text-2xl">Find Me On</h1>
            <div className="flex justify-around items-center w-10/12">
              <Link
                className="flex justify-center"
                to="https://web.facebook.com/galuh.panca.79"
                target="_blank"
              >
                <img
                  src="/images/icon-facebook.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://www.instagram.com/galuhpncwirasa_/"
                target="_blank"
              >
                <img
                  src="/images/icon-instagram.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://www.linkedin.com/in/galuh-panca/"
                target="_blank"
              >
                <img
                  src="/images/icon-linkedin.png"
                  className="w-10/12 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/4"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://github.com/GaluhPncWirs"
                target="_blank"
              >
                <img
                  src="/images/github-mark-white.png"
                  className="w-4/6 grayscale hover:grayscale-0 cursor-pointer max-[640px]:w-3/5"
                />
              </Link>
            </div>
          </div>

          {handleClickSendEmail && (
            <LayoutModalBox>
              <h1 className="text-xl font-semibold ">
                {modalSendEmail.sendEmailSuccess === true ? (
                  "Email Telah Berhasi Dikirim"
                ) : modalSendEmail.sendEmailFailed === true ? (
                  "Terjadi kesalahan, coba lagi."
                ) : (
                  <img
                    src="/images/loading.png"
                    alt="Loading"
                    className="animate-[spin_1s_linear_infinite] w-3/4"
                  />
                )}
              </h1>
              <button
                className="text-lg font-semibold bg-slate-300 px-10 rounded-lg py-0.5 hover:bg-slate-400 text-slate-800"
                onClick={() => setHandleClickSendEmail(false)}
              >
                Oke
              </button>
            </LayoutModalBox>
          )}
        </div>
      </MainLayout>
    </>
  );
}
