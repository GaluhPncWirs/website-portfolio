import MainLayout from "../../layout/mainLayout/content";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LayoutModalBox from "../../layout/modalBox/content";
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
    if (!handleConfirm) return;
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
  }, [handleConfirm]);

  function handleFillInput(e) {
    const { name, value } = e.target;
    return setInputFieldData({ ...inputFieldData, [name]: value });
  }

  const formIsFilled = Object.values(inputFieldData).every((str) => str !== "");

  function sendEmail() {
    try {
      setHandleClickSendEmail(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_CREDENTIAL_SERVICES_KEYS,
          import.meta.env.VITE_CREDENTIAL_TEMPLATE_EMAIL_KEYS,
          valueInput.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          },
        )
        .then((result) => {
          console.log("SUCCESS!", result.text);
          valueInput.current.reset();
          setModalSendEmail({
            sendEmailSuccess: true,
            sendEmailFailed: false,
          });
        });
    } catch (err) {
      console.error("error kirim email", err);
      setModalSendEmail({
        sendEmailSuccess: false,
        sendEmailFailed: true,
      });
      setHandleClickSendEmail(false);
    }
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
        <div className="mt-24 text-slate-200 ml-7 sm:mt-14 xl:h-screen">
          <form ref={valueInput} className="flex flex-wrap gap-7">
            <div className="flex flex-col w-full gap-5 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-lg font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 font-medium rounded-md text-slate-200 bg-slate-600"
                  placeholder="Your Name"
                  name="user_name"
                  id="user_name"
                  onChange={handleFillInput}
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-lg font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full h-10 px-3 font-medium rounded-md text-slate-200 bg-slate-600"
                  placeholder="yourEmail@gmail.com"
                  name="user_email"
                  id="user_email"
                  onChange={handleFillInput}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-semibold"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-32 p-3 font-medium rounded-md text-slate-200 bg-slate-600"
                placeholder="Message"
                onChange={handleFillInput}
                required
              />
            </div>
          </form>
          <button
            className="py-1 mt-5 text-lg font-bold rounded-md bg-slate-500 hover:bg-slate-600 px-7 disabled:cursor-not-allowed"
            disabled={!formIsFilled}
            onClick={() => setHandleConfirm((prev) => !prev)}
          >
            Send
          </button>

          <div className="mt-10">
            <h1 className="text-2xl font-bold mb-7">Find Me On</h1>
            <div className="flex items-center justify-around">
              <Link
                className="flex justify-center"
                to="https://web.facebook.com/galuh.panca.79"
                target="_blank"
              >
                <img
                  src="/images/icon-facebook.png"
                  className="cursor-pointer size-10 grayscale hover:grayscale-0"
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
                  className="cursor-pointer size-10 grayscale hover:grayscale-0"
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
                  className="cursor-pointer size-10 grayscale hover:grayscale-0"
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
                  className="cursor-pointer size-8 grayscale hover:grayscale-0"
                  loading="eager"
                />
              </Link>
            </div>
          </div>

          {handleConfirm && (
            <LayoutModalBox clickedOutsidePath={clickedOutsidePath}>
              <div className="w-10/12 mx-auto text-slate-200">
                <h1 className="mb-2 text-xl font-semibold">Konfirmasi</h1>
                <p>Apakah Anda Ingin Kirim Pesan ini ?</p>
                <div className="flex justify-end mt-5 gap-x-5">
                  <button
                    className="px-5 py-1 font-bold border rounded-md border-slate-200 hover:bg-slate-500"
                    onClick={() => setHandleConfirm(false)}
                  >
                    Tidak
                  </button>
                  <button
                    className="px-5 py-1 font-bold rounded-md bg-slate-300 text-slate-800 hover:bg-slate-500 hover:text-slate-200"
                    onClick={sendEmail}
                  >
                    Ya
                  </button>
                </div>
              </div>
            </LayoutModalBox>
          )}

          {handleClickSendEmail && (
            <LayoutModalBox clickedOutsidePath={null}>
              <div className="flex flex-col items-center justify-center">
                <div className="mb-5 text-xl font-semibold">
                  {modalSendEmail.sendEmailSuccess ? (
                    <span>Email Telah Berhasi Dikirim</span>
                  ) : modalSendEmail.sendEmailFailed ? (
                    <span>Terjadi kesalahan, Coba Lagi</span>
                  ) : (
                    <img
                      src="/images/loading.png"
                      alt="Loading"
                      className="animate-[spin_1s_linear_infinite] size-16 mx-auto"
                    />
                  )}
                </div>
                {!modalSendEmail.sendEmailSuccess ||
                  (!modalSendEmail.sendEmailFailed && (
                    <button
                      className="py-1 text-lg font-semibold rounded-lg bg-slate-500 px-7 hover:bg-slate-600 text-slate-200"
                      onClick={() => setHandleClickSendEmail(false)}
                    >
                      Oke
                    </button>
                  ))}
              </div>
            </LayoutModalBox>
          )}
        </div>
      </MainLayout>
    </>
  );
}
