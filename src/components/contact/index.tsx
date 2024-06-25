import Form from './form'

const Contact = () => {
  return (
    <section id='contact' className="min-h-[100vh] bg-white text-Teal">
      <div className='mx-10 pt-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
              <div className='mx-auto mb-[30px] max-w-[510px] text-center'>
                  <span className='mb-2 block text-lg font-semibold text-Blue'>
                      Contact Us
                  </span>
                  <h2 className='mb-3 text-3xl font-bold sm:text-4xl md:leading-[1.2] md:text-[40px]'>
                      Detailing Services
                  </h2>
                  <p>
                    Let us know about your vehicle!
                  </p>
              </div>
          </div>
        </div> 
      </div>
      <div className='flex justify-center'>
        <Form
              initialSize="80px"
              expandedSize="500px"
              initialColor="#172554"
              expandedColor="#F0F4F8"
              buttonText="Start"
              className=''
          >
              <div className="p-6 flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-4">My Custom Title</h2>
                  <p className="text-center">This is my custom content with centered text.</p>
              </div>
          </Form>
      </div>
    </section>
  )
}

export default Contact