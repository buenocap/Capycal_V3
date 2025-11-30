export default function WelcomePage() {
  return (
    <>
      <div className="m-3 text-theme bg-AshGray/85 rounded-3xl px-4 py-2 flex justify-center">
        <h1 className="text-4xl font-bold">Welcome to Capycal!</h1>
      </div>
      <div className=" m-3 text-theme bg-AshGray/85 rounded-3xl px-4 py-2 ">
        <div className="grid grid-cols-2">
          <div className="section-1">
            <h2 className="text-2xl font-bold mb-2">What is Capycal?</h2>
            <p>
              Capycal is a calendar app that allows you to create and manage
              your own calendar events. As you may have noticed Capycal is
              themed around Capybaras these cutie and cuddly rodents are the
              best! You'll find a capybara around every corner of the app. This
              app is a work in progress and a personal project of mine. I
              originally came up with the idea to make this app because my
              partner loves capybaras and likes using popular calendar apps to
              plan their day and keep organized. So I thought why not make one
              for them, while also teaching myself and continue my learning
              journey as a Software Developer / Web Developer. That being said
              Capycal will most likely have mistakes and bugs here and there,
              but with your help it will grow and become better.
            </p>
          </div>
          <div className="section-2 self-center">
            <img
              src="./CapycalLogo.png"
              alt="Capycal Logo"
              width={300}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="m-3 text-theme bg-AshGray/85 rounded-3xl px-4 py-2">
        {" "}
        <h2 className="text-2xl font-bold">How to use Capycal</h2>
        <p>
          Capycal was made with simplicity in mind. To use Capycal, you will
          need to sign up for an account. Once you have an account, you can
          create and manage your own calendar events.
        </p>
      </div>
      <div className="m-3 text-theme bg-AshGray/85 rounded-3xl px-4 py-2">
        <h3 className="text-xl font-bold">Dev Log</h3>
      </div>
    </>
  );
}
