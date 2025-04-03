import contacnetLogo from '../assets/contacnet.png';

const Header = () => {
    return (
        <header className='grid grid-cols-8 items-center p-4 shadow-xl bg-white sticky top-0 h-20 z-50'>
            <section className='col-span-7 text-3xl text-main font-semibold'>
                <h1>Manual <span className='text-secondary'>Macro Acompanhamento</span></h1>
            </section>
            <section className=''>
                <img src={contacnetLogo} alt='Contacnet' />
            </section>
        </header>
    );
};

export default Header;