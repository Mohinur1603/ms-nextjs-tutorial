import Layout from 'src/layout/layout'
import Head from 'next/head'
import { Content, Hero, Sidebar } from 'src/components'
import { Stack } from '@mui/material'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mohin app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hero/>
     <Stack direction={'row'} p={3}>
      <Sidebar/>
      <Content/>
     </Stack>
    </Layout>
  )
}
