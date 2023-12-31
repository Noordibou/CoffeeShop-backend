import React from 'react';

export default function Footer() {
  return (
    <footer className='relative bottom-0 px-4 mt-12 w-full text-bodyColor' style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <div className='container mx-auto py-2'>
        <div className='grid grid-cols-3 gap-8 text-xs'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>FAQ</h2>
            <span>Where we are based</span>
            <span>How we operate</span>
            <span>Refund policy</span>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>Contacts</h2>
            <span>Email: test.gmail.com</span>
            <span>Phone: ***-***-****</span>
            <span>Address: 1234 test test test</span>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>Privacy Policy</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dicta! Voluptate nihil quidem omnis voluptatibus minima similique error eius nostrum tempore, esse cumque alias unde autem molestiae officiis? Cumque, amet!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
