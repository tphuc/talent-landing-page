import Head from 'next/head'
import { styled } from '@stitches/react'
import { amber, mauve, orange, orangeA, purpleDark, purple, violet } from '@radix-ui/colors'
import { Dialog, DialogContent, DialogTrigger } from '../components/Dialog'
import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'


const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  maxWidth: 1400,
  flexGrow: 1,
  flexShrink: 1,
  flexSasis: 0,
  paddingTop: 16,
  paddingRight: 34,
  paddingBottom: 16,
  paddingLeft: 34,
})

const Center = styled('div', {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})


const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  transition: "0.4s ease all",
  cursor: "pointer",

  variants: {
    size: {
      md: {
        height: 35
      },
      lg: {
        height: 40,
      }
    },
    variant: {
      default: {
        color: mauve.mauve11,
        '&:hover': {
          transition: "0.4s ease all",
          color: mauve.mauve12,
        }
      },
      primary: {
        backgroundColor: orange.orange9,
        color: "white",
        '&:hover': {
          transition: "0.4s ease all",
          transform: "translate(1px, -1px)",
          boxShadow: `${orangeA.orangeA5} 0px 6px 24px, ${orangeA.orangeA5} 1px 4px 12px`,
        }
      },
      white: {
        backgroundColor: 'white',
        color: mauve.mauve12,
        '&:hover': {
          transition: "0.4s ease all",
          transform: "translate(1px, -1px)",
        }

      }
    }
  },

  defaultVariants: {
    variant: "default",
    size: "md"
  }
})


const Row = styled('div', {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
})

const Link = styled('a', {
  cursor: 'pointer',
  fontWeight: 500,
  padding: 0
})

const Box = styled('div')


export default function Home() {
  const router = useRouter();


  // let { data, status, } = useSession({
  //   required: true
  // });

  // if (status == 'loading') {
  //   return <div style={{ width: "100vw", position: "fixed", top: 0, left: 0, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  //     <H2>Insource Talent</H2>
  //   </div>
  // }


  return (
    <div>
      <Head>
        <title>Insource Talent</title>
        <meta name="description" content="Insource talent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header>
          <div>
            LOGO
          </div>
          <div style={{ flexGrow: 1, flexShrink: 1, flexBasis: "auto" }}></div>
          <Center style={{ justifyContent: "space-around", gap: 15 }}>
            <Link>Our features</Link>
            <Link>Who need us</Link>
            <Link>Special benefits</Link>
            <Link>Pricing</Link>
            <Link>Contact us</Link>
          </Center>
          <div style={{ flexGrow: 1, flexShrink: 1, flexBasis: "auto" }}></div>
          <div>
            <Button onClick={() => router.push('https://talent-dasboard.vercel.app/login')}>Login</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'primary'}>Sign up</Button>
              </DialogTrigger>
              <DialogContent css={{ maxWidth: '90vw' }}>
                <h1 style={{ color: "white", textAlign: "center" }}>Choose your plan</h1>
                <Box css={{ display: "grid", width: "100%", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
                  <Box css={{ background: 'white', borderRadius: 10, padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ color: orange.orange10, textAlign: "center" }}>Freelancer</h2>
                    <div style={{ height: 2, backgroundColor: violet.violet10, width: 100, maxWidth: 100, marginLeft: 'auto', marginRight: 'auto' }}></div>
                    <div>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> 4 Active jobs</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> 100 Candidates</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CrossCircledIcon width={24} height={24} color='red' /> No career website</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CrossCircledIcon width={24} height={24} color='red' /> No role and permission</Row>
                    </div>
                    <br />
                    <Button variant='primary' onClick={() => router.push({
                      pathname:"/signup",
                      query: {
                        type:"freelancer"
                      }
                    })}>Register this plan</Button>
                  </Box>

                  <Box css={{ background: 'white', borderRadius: 10, padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ color: orange.orange10, textAlign: "center" }}>HR Internal Team</h2>
                    <div style={{ height: 2, backgroundColor: violet.violet10, width: 100, maxWidth: 100, marginLeft: 'auto', marginRight: 'auto' }}></div>
                    <div>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> 10 Active jobs</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> 500 Candidates</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Career website</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Role and permission</Row>
                    </div>
                    <br />
                    <Button onClick={() => router.push({
                      pathname:"/signup",
                      query: {
                        type:"hr_internal_team"
                      }
                    })} variant='primary'>Register this plan</Button>
                  </Box>

                  <Box css={{ background: 'white', borderRadius: 10, padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ color: orange.orange10, textAlign: "center" }}>Headhunt Agency</h2>
                    <div style={{ height: 2, backgroundColor: violet.violet10, width: 100, maxWidth: 100, marginLeft: 'auto', marginRight: 'auto' }}></div>
                    <div>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Unlimited Active jobs</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Unlimited Candidates</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Career website</Row>
                      <Row style={{ gap: 10, margin: 5 }}> <CheckCircledIcon width={24} height={24} color='green' /> Role and permission</Row>
                    </div>
                    <br />
                    <Button 
                    onClick={() => router.push({
                      pathname:"/signup",
                      query: {
                        type:"headhunting_agency"
                      }
                    })}
                    variant='primary'>Register this plan</Button>
                  </Box>
                </Box>

              </DialogContent>
            </Dialog>
          </div>
        </Header>
        <div style={{ background: `linear-gradient(40deg, ${purple.purple12}, ${violet.violet10})`, width: "100vw", height: '95vh', padding: "5%", color: 'white' }}>
          <div style={{ maxWidth: "min(800px, 90vw)" }}>
            <h2 style={{ fontSize: "6vh" }}>The collaborative software that builds winning teams</h2>
            <p style={{ fontSize: "3vh" }}>Bring your hiring team together, boost your sourcing, automate your hiring, and evaluate candidates effectively</p>
            <br />
            <div style={{ display: "flex", gap: 10 }}>
              <Button size={'lg'} variant='primary'>Trial for 30days</Button>
              <Button size='lg' variant='white'>Request a demo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}


// Home.getLayout = (page) => {
//   return <DashboardLayout>
//       {page}
//   </DashboardLayout>
// }