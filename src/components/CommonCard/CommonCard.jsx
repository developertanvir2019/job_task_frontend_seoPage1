import React, { useRef, useState } from 'react'
import './CommonCard.css'
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineEventNote, MdOutlineTextsms } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const CommonCard = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };



    const handleFileInputChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
    };
    const handleFileUpload = async () => {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });

        try {
            await axios.post('http://localhost:3001/upload', formData);
            toast.success('Files uploaded successfully');
        } catch (error) {
            toast.error('Error uploading files', error);
        }
    };


    return (
        <>
            <div className='w-full-2 mx-2 mb-3 p-3 h-28 bg-white'>
                {/* card header */}
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img className='w-6 h-6 rounded-full' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1056224568.1666704460&semt=ais" />
                        <p className='font-semibold text-small text-gray-600'>Client Name</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-6 h-6 rounded-full' src="https://plus.unsplash.com/premium_photo-1689632031083-518b012767a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80" />
                        <p className='font-semibold text-small text-gray-600'>Sadik Istiaq</p>
                    </div>
                </div>


                {/* card center */}
                <div className='flex justify-between py-2'>
                    <p className='text-small flex items-center font-semibold text-gray-500'><FiDatabase className='text-bold' /><span>Lorem ipsum dolor,  amet...</span></p>
                    <h2 className='text-small bg-gray-200 flex items-center font-semibold text-gray-500'><MdOutlineEventNote /><span>1/2</span></h2>
                </div>


                {/* footer part */}


                <div className='flex mt-2 justify-between'>
                    <img className='w-5 h-5 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZ8CD0fPA28Fx_GUeHHf0p1w-Tsj3PKp8tQ&usqp=CAU" />
                    <img className='w-5 h-5 rounded-full' src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                    <p className='bg-gray-200 h-6 w-6 rounded-full text-small font-semibold text-gray-500 flex justify-center items-center'>12+</p>
                    <div className='flex text-small font-semibold text-gray-500 items-center'>
                        <MdOutlineTextsms />
                        <p>15</p>
                    </div>
                    <div className='flex text-small font-semibold text-gray-500 items-center'>
                        <div onClick={openModal}>   <AiOutlineLink /></div>
                        <p>25</p>
                    </div>
                    <div className='flex text-small font-semibold text-gray-500 items-center'>
                        <BiCalendar />
                        <p>30-12-22</p>
                    </div>
                </div>


            </div>


            {/* Open the modal using ID.showModal() method */}
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">

                    <div className='flex justify-between'>
                        <div className='w-2/5'>
                            <h2 className='text-xl font-semibold text-cyan-500'>Selected Files:</h2>
                            <ul>
                                {selectedFiles.map((file, index) => (
                                    <li className='text-sm mb-2' key={index}>
                                        {file.name} ({file.type})
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <input className="w-3/5 file-input file-input-bordered file-input-info  max-w-xs" type="file" multiple onChange={handleFileInputChange} />
                    </div>

                    <div className="modal-action">
                        <button onClick={handleFileUpload} className='btn btn-info'>Upload</button>
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default CommonCard