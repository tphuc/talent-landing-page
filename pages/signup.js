import Head from 'next/head'
import { styled } from '@stitches/react'
import { amber, mauve, orange, orangeA, purpleDark, purple, violet, blackA } from '@radix-ui/colors'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toFormData } from '../utils';
import sha1 from 'sha1'
import { useToasts } from '../components/Toast';

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

const StyledErrorMessage = styled('p', {
  marginTop:2,
  color:"red",
  fontSize:"small",
  textAlign:"left"
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


const Link = styled('a', {
  cursor: 'pointer',
  fontWeight: 500,
  padding: 0
})


const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 8,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  boxSizing: "border-box",
  color: mauve.mauve12,
  background: mauve.mauve2,
  textAlign: "left",
  boxShadow: `0 0 0 1px ${mauve.mauve4}`,
  height: 35,
  width: "100%",
  '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
});

const Box = styled('div')

const Label = styled('label', {
  textAlign: "left",
  marginTop: 10,
  fontWeight: 500,
  color: mauve.mauve12
})


const schema = yup.object().shape({
  commercial_name: yup.string().required('this field is required'),
  email: yup.string().email('should be a valid email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'Is not in correct email format').required('this field is required'),
  name: yup.string().required('this field is required'),
  phone: yup.number().typeError('should be a valid number').required('this field is required'),
  user_name: yup.string().required('this field is required'),
  password: yup.string().required('this field is required'),
}).required();


export default function SignUp() {
  const router = useRouter();
  const { type } = router.query


  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema)
  });

  const toast = useToasts()

  // let { data, status, } = useSession({
  //   required: true
  // });

  // if (status == 'loading') {
  //   return <div style={{ width: "100vw", position: "fixed", top: 0, left: 0, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  //     <H2>Insource Talent</H2>
  //   </div>
  // }


  const onSubmit = async (values) => {

    
    
    let res = await axios.post(`https://inhiring.aicoons.com/api/register`, toFormData({
      ...values,
      type,
      password: sha1(values.password)
    }))
   
    toast.add(res?.data?.message)
    if(res.data?.status){
      router.push('https://talent-dasboard.vercel.app/login')
    }
  }

  return (
    <div>
      <Head>
      <title>Insource Talent | Sign up</title>
        <meta name="description" content="Insource talent sign up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ width: "100vw", background: `linear-gradient(40deg, ${purple.purple12}, ${violet.violet10})`, height: '100vh', padding: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box style={{
              background: mauve.mauve1, display: "flex", gap: 5, flexDirection: "column", textAlign: "center", borderRadius: 18,
              boxShadow: `${blackA.blackA3} 0px 0px 0px 2px`,
              padding: 40, maxWidth: 460, width: "100%", border: `1px solid ${mauve.mauve2}`
            }}>
              <h2 style={{ color: violet.violet10, marginBottom: 5 }}>Create an Account</h2>
              <span style={{ color: mauve.mauve12 }}>Already have an account ? <Link href='https://talent-dasboard.vercel.app/login' css={{ color: violet.violet10 }}>Login</Link></span>
              <br />

              <Box css={{ display: "flex", alignItems:"baseline", gap:10 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, }}>
                  <Label style={{ textAlign: "left" }}>Commercial name</Label>
                  <Input {...register('commercial_name')} placeholder='' ></Input>
                  {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.commercial_name?.message}</StyledErrorMessage>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 5, }}>
                  <Label style={{ textAlign: "left" }}>Your name</Label>
                  <Input {...register('name')} placeholder='johndoe' ></Input>
                  {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.name?.message}</StyledErrorMessage>}
                </div>
              </Box>


              <Label style={{ textAlign: "left" }}>Email</Label>
              <Input {...register('email')} placeholder='johndoe@gmail.com' ></Input>
              {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.email?.message}</StyledErrorMessage>}

              <Label style={{ textAlign: "left" }}>Phone</Label>
              <Input {...register('phone')} placeholder='+84' ></Input>
              {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.phone?.message}</StyledErrorMessage>}
              

              <Label style={{ textAlign: "left" }}>Username</Label>
              <Input {...register('user_name')} placeholder='enter username' ></Input>
              {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.user_name?.message}</StyledErrorMessage>}

              <Label style={{ textAlign: "left" }}>Password</Label>
              <Input {...register('password')} placeholder='enter password' type='password' ></Input>
              {formState?.isSubmitted && <StyledErrorMessage>{formState?.errors?.password?.message}</StyledErrorMessage>}

              <br />
              <Button variant='primary'>Sign up</Button>
            </Box>
          </div>
        </form>
      </div>

    </div>




  )
}


// Home.getLayout = (page) => {
//   return <DashboardLayout>
//       {page}
//   </DashboardLayout>
// }