import {getProviders , signIn} from 'next-auth/react'

function login({providers}) {
    console.log(providers)
    return (
        <div className='flex justify-center items-center bg-black flex-col min-h-screen'>
            <img className='mb-5 w-52' src="https://links.papareact.com/9xl" alt="" />

            {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                    <button className='bg-[#18D860] text-white p-5 rounded-full'
                    onClick={() => signIn(provider.id, { callbackUrl: "/"})}
                    >Login with {provider.name}</button>
                </div>
            ))}

        </div>
    )
}

export default login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}
