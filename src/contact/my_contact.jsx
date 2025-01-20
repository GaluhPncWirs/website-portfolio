import MainLayout from "../layout/main-layout";

export default function ContactMe() {
  return (
    <MainLayout propsTitle="Contact">
      <div className="max-w-3xl mt-10 mx-auto text-slate-200">
        <div>
          <h1 className="font-bold text-2xl mb-5">Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.957053941108!2d106.95862307434643!3d-6.399535693591068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699540600a786b%3A0xf238a808d2e40179!2spenjahit%20galuh!5e0!3m2!1sid!2sid!4v1737379001599!5m2!1sid!2sid"
            width="600"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl mb-5">Contact Form</h1>
          <form action="" className="flex flex-wrap justify-around">
            <div className="basis-5/12">
              <label htmlFor="" className="font-semibold text-lg mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-md h-10 px-3 text-black font-medium"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="basis-5/12">
              <label htmlFor="" className="font-semibold text-lg mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-md h-10 px-3 text-black font-medium"
                placeholder="jhonDoe544@gmail.com"
              />
            </div>
            <div className="basis-2/3 mt-5">
              <label htmlFor="" className="font-semibold text-lg mb-2 block">
                Your Message
              </label>
              <textarea
                name="message"
                className="w-full h-32 rounded-md p-3 text-black font-medium"
                placeholder="Message"
              />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
