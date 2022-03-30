import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Book = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16 p-4'>
        <div className='flex flex-col lg:col-span-2 justify-evenly'>
            <>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-2'>Come experience the very pinnacle of luxury Caribbean all-inclusive
                vacations for couples at BEACHES Resorts. Our luxury beach resorts,
                set along the most gorgeous tropical settings and exquisite beaches
                in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
                Curaçao, feature unlimited gourmet dining, unique bars serving
                premium liquors and wines, and every land and water sport, including
                complimentary green fees at our golf resorts and certified scuba
                diving at most resorts. If you are planning a wedding, BEACHES is
                the leader in Caribbean destination weddings and honeymoon packages.
                </p>
            </>
            <div className='grid sm:grid-cols-2 py-4 gap-8'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h3>AUTOMATED BOOKINGS</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='border text-center'>
                <p className='py-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col'>
                    <label>Destinations</label>
                    <select className='border'>
                        <option>Maldives</option>
                        <option>Borabora</option>
                        <option>KeyWest</option>
                        <option>Ohio</option>
                        <option>Grande Antigua</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='pt-2'>Check-In</label>
                    <input type="date" className='border'/>
                </div>
                <div className='flex flex-col'>
                    <label className='pt-2'>Check-Out</label>
                    <input type="date" className='border'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Book;