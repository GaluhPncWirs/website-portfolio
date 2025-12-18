import MainLayout from "../layout/main-layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LayoutModalBox from "../layout/modalBox";
import { useEffect } from "react";

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
  const valueInput = useRef(null);
  const [handleConfirm, setHandleConfirm] = useState(false);
  const clickedOutsidePath = useRef(null);

  useEffect(() => {
    if (!clickedOutsidePath) return;
    function handleClickedOutsideClosed(event) {
      if (
        clickedOutsidePath.current &&
        !clickedOutsidePath.current.contains(event.target)
      ) {
        setHandleConfirm(false);
      }
    }

    window.addEventListener("mousedown", handleClickedOutsideClosed);
    window.addEventListener("touchstart", handleClickedOutsideClosed);

    return () => {
      window.removeEventListener("mousedown", handleClickedOutsideClosed);
      window.removeEventListener("touchstart", handleClickedOutsideClosed);
    };
  }, []);

  function handleFillInput(e) {
    const { name, value } = e.target;
    return setInputFieldData({ ...inputFieldData, [name]: value });
  }

  function formIsFilled() {
    return Object.values(inputFieldData).every((str) => str !== "");
  }

  function sendEmail() {
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
          setHandleClickSendEmail(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setModalSendEmail({
            sendEmailSuccess: false,
            sendEmailFailed: true,
          });
          setHandleClickSendEmail(false);
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
            <h1 className="font-bold text-2xl mb-8">Contact Form</h1>
            <form ref={valueInput}>
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
            </form>
            <button
              className="text-lg font-bold bg-slate-500 rounded-md mt-5 hover:bg-slate-600 py-1 px-7 disabled:cursor-not-allowed"
              disabled={!formIsFilled()}
              onClick={() => setHandleConfirm(true)}
            >
              Send
            </button>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl mb-7">Find Me On</h1>
            <div className="flex justify-around items-center mx-auto w-10/12 max-[640px]:w-full">
              <Link
                className="flex justify-center"
                to="https://web.facebook.com/galuh.panca.79"
                target="_blank"
              >
                <img
                  src="/images/icon-facebook.png"
                  className="size-10 grayscale hover:grayscale-0 cursor-pointer"
                  loading="eager"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://www.instagram.com/galuhpncwirasa_/"
                target="_blank"
              >
                <img
                  src="/images/icon-instagram.png"
                  className="size-10 grayscale hover:grayscale-0 cursor-pointer"
                  loading="eager"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://www.linkedin.com/in/galuh-panca/"
                target="_blank"
              >
                <img
                  src="/images/icon-linkedin.png"
                  className="size-10 grayscale hover:grayscale-0 cursor-pointer"
                  loading="eager"
                />
              </Link>
              <Link
                className="flex justify-center"
                to="https://github.com/GaluhPncWirs"
                target="_blank"
              >
                <img
                  src="/images/github-mark-white.png"
                  className="size-8 grayscale hover:grayscale-0 cursor-pointer"
                  loading="eager"
                />
              </Link>
            </div>
          </div>

          {handleConfirm && (
            <LayoutModalBox clickedOutsidePath={clickedOutsidePath}>
              {handleClickSendEmail === true ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="text-xl font-semibold mb-3">
                    {modalSendEmail.sendEmailSuccess === true ? (
                      <span>Email Telah Berhasi Dikirim</span>
                    ) : modalSendEmail.sendEmailFailed === true ? (
                      <span>Terjadi kesalahan, Coba Lagi</span>
                    ) : (
                      <img
                        src="/images/loading.png"
                        alt="Loading"
                        className="animate-[spin_1s_linear_infinite] size-16 mx-auto"
                      />
                    )}
                  </div>
                  <button
                    className="text-lg font-semibold bg-slate-500 px-7 rounded-lg py-1 hover:bg-slate-600 text-slate-200"
                    onClick={() => setHandleClickSendEmail(false)}
                  >
                    Oke
                  </button>
                </div>
              ) : (
                <div className="text-slate-200 w-10/12 mx-auto">
                  <h1 className="text-xl font-semibold mb-2">Konfirmasi</h1>
                  <p>Apakah Anda Ingin Kirim Pesan ini ?</p>
                  <div className="flex justify-end gap-x-5 mt-5">
                    <button
                      className="px-5 py-1 rounded-md border border-slate-200 font-bold hover:bg-slate-500"
                      onClick={() => setHandleConfirm(false)}
                    >
                      Tidak
                    </button>
                    <button
                      className="px-5 py-1 rounded-md font-bold bg-slate-300 text-slate-800 hover:bg-slate-500 hover:text-slate-200"
                      onClick={sendEmail}
                    >
                      Ya
                    </button>
                  </div>
                </div>
              )}
            </LayoutModalBox>
          )}
        </div>
      </MainLayout>
    </>
  );
}
