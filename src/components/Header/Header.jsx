import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center m-4 px-4 border-b-2 max-w-6xl mx-auto'>
             <h1 className='text-3xl font-bold'>knowledge cafe world</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;