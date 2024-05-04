import { BanknotesIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/16/solid'
import { CardWithLink } from './Card'

const CardRow = () => {
  return (
    <div className='flex flex-col items-center py-[4%] px-[5%] text-center'>

      <p className='md:text-5xl text-4xl font-semibold '>Simple Fast Loans Makes Getting a Loan Easy!</p>
      <p className='text-xl text-center border-b-[1px] pb-10 mb-10'>Looking for a fast loan advance to cover unexpected expenses? Simple Fast Loans has you covered with online installment loans. With good or bad credit, our application process makes it easy for you to access speedy loans without the hassle of traditional lending practices. Say goodbye to long waiting times!</p>

      <p className='text-3xl font-semibold'>Get Your Loan in 3 Easy Steps</p>

        <div className='flex flex-col md:flex-row gap-5'>
          <CardWithLink icon={<ComputerDesktopIcon/>} Text1={'Simple Verification Process'} paragraph={'Fill out the easy and fast online application.'}/>
          <CardWithLink icon={<BanknotesIcon/>} Text1={'Instant Loan decisions'} paragraph={'Your loan decision is made in just minutes.'}/>
          <CardWithLink icon={<CreditCardIcon/>} Text1={'Get Your Cash'} paragraph={'Get funds deposited into your account by next business day.**'}/>
        </div>
    </div>
  )
}

export default CardRow