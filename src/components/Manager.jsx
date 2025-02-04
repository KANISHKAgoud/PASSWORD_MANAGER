import React, { useEffect } from 'react'
import { useState } from 'react'

const Manager = () => {
    const [togglepassword, settogglePassword] = useState(true)
    const [data, setdata] = useState([])
    const [index, setIndex] = useState(null)
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    }
    )

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const showpassword = () => {
        settogglePassword(prevstate => !prevstate)
    }

    useEffect(() => {
        if (localStorage.getItem('data')) {
            setdata(JSON.parse(localStorage.getItem('data')))
        }
    }, [])

    const savedata = () => {
        // setpasswords(...form)
        if (index !== null) {
            let updated_data = [...data]
            updated_data[index] = form
            setdata(updated_data)
            localStorage.setItem(data, JSON.stringify(updated_data))
            setIndex(null)
        }
        else {
            let newdata = [...data, form]
            setdata(newdata)
            localStorage.setItem(data, JSON.stringify([...data, form]))
        }

        setform({ site: "", username: "", password: "" });
    }

    const handleEdit = (index) => {
        //   let alldata = [...data]
        //   alldata[index]= {...form, [e.target.name] : e.target.value}
        setform(data[index])
        setIndex(index)
    }

    const handleDelete = (index) => {
        setdata(data.filter((_, i) => i !== index))
        localStorage.setItem('data', JSON.stringify(data));
        setform({ site: "", username: "", password: "" });
    }



    return (
        <div>
            <div className='bg-[#2E236C] h-[88vh] pt-2 text-white max-w-full'>
                {/* AFTER THE NAVBAR  */}
                <div className='text-center'>
                    <div className='text-4xl font-extrabold'>
                        LockVault
                    </div>
                    <div className='py-3'>
                        Your own password manager
                    </div>
                </div>


                <div className='bg-[#433D8B] mx-auto w-[95%] sm:w-[90%] h-[72vh] text-black relative'>
                    {/* WEBSITE URL  */}
                    <input className='mt-7 bg-[#C8ACD6] w-[90%] mx-10 rounded-3xl pl-3' name="site" value={form.site} type="text" placeholder='Enter Website URL' onChange={handlechange} />

                    <div className='flex justify-between mx-10 mt-6'>
                        {/* USERNAME  */}
                        <input className='bg-[#C8ACD6] w-[75%] rounded-3xl pl-3' type="text" name="username" value={form.username} placeholder='Enter Username' onChange={handlechange} />

                        {/* PASSWORD  */}
                        <div className='bg-[#C8ACD6] w-[20%] rounded-3xl'>
                            <input className=' pl-3 ' type={togglepassword ? "text" : "password"} placeholder='Enter Password' name="password" value={form.password} onChange={handlechange} />
                            <span onClick={showpassword}>
                                {togglepassword ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}</span>
                        </div>
                    </div>

                    <button onClick={savedata} className='bg-[#C8ACD6] flex justify-center items-center cursor-pointer rounded-3xl w-fit px-2 hover:font-bold mt-4 absolute right-8'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>Add password
                    </button>

                    <div className='border-2 border-green-50 mt-16 mx-7'> </div>

                    {/* SHOWING THE DATA IN THE APPLICATION  */}
                    <div className='mt-6 text-2xl text-white font-bold ml-5 '>YOUR PASSWORDS</div>

                    {data.length === 0 ? (
                        <div className='text-white ml-7 mt-3 font-medium'>No Passwords to show</div>
                    ) : (
                        <table className="w-[90%] mx-auto text-white">
                            <thead>
                                <tr>
                                    <th className='text-left px-14'>URL</th>
                                    <th className='text-left px-14'>UserName</th>
                                    <th className='text-left px-14'>Password</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {data.map((e, index) => (
                                    <tr key={index} className='bg-[#C8ACD6] h-8 rounded-lg text-black'>
                                        <td className='text-center px-4 flex items-center gap-2'>                     <a href={e.site} target='_blank'> {e.site}</a>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                        // style="width:250px;height:250px"
                                        >
                                        </lord-icon>
                                        </td>

                                        <td className='text-center px-4 '>{e.username}
                                            <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                        style={{"width":"30px",height:"30px"}}
                                        >
                                        </lord-icon>
                                        </td>

                                        <td className='text-center px-4'>{e.password}
                                            <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                        // style="width:250px;height:250px"
                                        >
                                        </lord-icon>
                                        </td>
                                        
                                        <td className='text-center flex justify-end'>
                                            <lord-icon
                                                onClick={() => handleEdit(index)}
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover">
                                            </lord-icon>

                                            <lord-icon
                                                onClick={() => handleDelete(index)}
                                                src="https://cdn.lordicon.com/hwjcdycb.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}


                </div>

            </div>
        </div>
    )
}

export default Manager
