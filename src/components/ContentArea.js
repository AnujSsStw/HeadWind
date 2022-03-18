import Navbar from "./Navbar";
import FetchRandomUser from "./Gen/nameGen"
import FetchRandomText from "./Gen/textGen";
import { BsPlusCircleFill } from 'react-icons/bs';

const Contant = () => {
    return (
        <div className="flex flex-col  bg-gray-300 
        dark:bg-gray-700
        m-0 h-full w-full overflow-hidden">
            <Navbar />
            <div className="feeds-list">
                {/* {Array.from({ length: random }, (_, length) =>
                    <Feeds key={length}
                        name={<FetchRandomUser />}
                        timestamp='one week ago'
                        text={<FetchRandomText />}
                    />)} */}
                <Feeds
                    name='Anuj Singh'
                    timestamp='one week ago'
                    text={'https://api.randomuser.me/ has a limit of only four so i have to start typing. OoO and the timestamp is like that because of generating name i think so, Sorry 😞'}
                />
                <Feeds
                    name={<FetchRandomUser />}
                    timestamp='one week ago'
                    text={<FetchRandomText />}
                />
                <Feeds
                    name={<FetchRandomUser />}
                    timestamp='4 days ago'
                    text={<FetchRandomText />}
                />
                <Feeds
                    name={<FetchRandomUser />}
                    timestamp='22 hours ago'
                    text={<FetchRandomText />}
                />
                <Feeds
                    name={<FetchRandomUser />}
                    timestamp='3 hours ago'
                    text={<FetchRandomText />}
                />
                <Feeds
                    name='Claire'
                    timestamp='2 hours ago'
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
                />
                <Feeds
                    name='H.U.N.K'
                    timestamp='Just now'
                    text={`Lorem ipsum dolor sit amet cofafdipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elitfafafadolor sit amet consectetur
          adipisicing elfafdafafd dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
                />
            </div>
            <TypingBar />
        </div>
    )
}

const Feeds = ({ name, timestamp, text }) => {
    const random = Math.round(Math.random() * 100)
    return (
        <div className='post overflow-hidden'>
            <div className="profile">
                <img src={`https://avatars.dicebear.com/api/open-peeps/${random}.svg`} alt='' className='profile-pic' />
            </div>

            <div className='post-content'>
                <p className='text-left font-semibold text-gray-800 dark:text-white mr-2 cursor-pointer'>
                    {name}

                    <small className='text-xs text-left font-semibold text-gray-500 dark:text-gray-600 ml-2'>
                        {timestamp}
                    </small>
                </p>
                <p className='text-lg text-left text-gray-800 dark:text-white mr-auto whitespace-normal'>
                    {text}
                </p>
            </div>
        </div>
    )
}

const TypingBar = () => (
    <div className='typingBar overflow-hidden'>
        <PlusIcon />
        <input type='text' placeholder='Enter message...' className='typingBar-input' />
    </div>
)

const PlusIcon = () => (
    <BsPlusCircleFill
        size='22'
        className='text-green-500 dark:shadow-lg mx-2 dark:text-primary' />
)


export default Contant