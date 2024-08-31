import BenefitsList from '@/components/BenefitsList'
import Content from '@/components/Content'
import Form from '@/components/Form'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Content />
        <BenefitsList />
        <h2 className='main__title color-blue'>Millions of people trust us!</h2>
        <Form />
      </main>
    </div>
  )
}
