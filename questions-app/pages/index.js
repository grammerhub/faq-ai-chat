import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const callAPI = async () => {
  try {
    // grabs questions value from input
    const question = document.querySelector('#question-input').value

    // makes fetch request to backend api
    const res = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
          query: question,
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    // console.log(err);
  }
}

return (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Display style={styles} question="What is your name?" answer="Zephyr"/>
    <section className={styles.form_container}>
      <form className={styles.question_form} onSubmit={formSubmit}>
        <input id="question-input" className={styles.question_input} type="text"></input>
      </form>
    </section>
  </>
)
