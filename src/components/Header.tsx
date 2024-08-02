
import heroBackground from '../images/heroBackground.png?url';
import heroBackground2 from '../images/heroBackground2.png?url';
export default function header(){
    return(
        <div className='min-w-full container relative overflow-hidden z-30'>
            <div className="flex flex-col w-full relative border border-neutral-200 min-h-[500px] bg-gradient-to-b from-[#1E293B] via-[#2C3E50] to-[#3498DB] lg:grid lg:grid-cols-2">
                <div className="px-4 p-0 lg:p-10 flex flex-col lg:flex-row relative order-last lg:order-first">
                    
                    <div className='text-neutral-200  '>
                        <h1 className="text-lg lg:text-3xl font-robotoMono">This is Fabled Pages</h1>
                        <p className="mt-3">Hi, hello there. Join me as I explore the things that I like.<br/> Enjoy the little corners of my world c:</p>
                    </div>

                </div>
                <div className='relative order-first lg:order-last'>
                    <div className='opacity-70 min-w-full min-h-[150px] lg:min-h-[300px] bg-center lg:bg-top-center bg-contain bg-no-repeat lg:absolute lg:bottom-0 lg:-right-1/3' style={{
                        backgroundImage: `url(${heroBackground2})`,
                    }}>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}