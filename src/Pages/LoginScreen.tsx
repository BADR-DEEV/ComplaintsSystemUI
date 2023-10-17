import * as Form from '@radix-ui/react-form';
import './LoginScreen.css';

export default function LoginScreen() {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.currentTarget;
        const data = {
            email: target.email.value,
            password: target.password.value,
        };
        console.log(data);
    };


    return (
        <div className='Container'>
            <h1>LOGIN</h1>
            <Form.Root onSubmit={onSubmit} className="FormRoot">

                <Form.Field className="FormField" name="email">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="FormLabel">Email</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input placeholder='Email' name="email" className="Input" type="email" required />
                    </Form.Control>
                </Form.Field>

                <Form.Field className="FormField" name="Password">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="FormLabel">Password</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter Your Password
                        </Form.Message>
                        <Form.Message className="FormMessage" match={(value, formData) => value.length < 6}>
                            Password is less then 6 letters
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input placeholder='Password' name="password" className="Input" type="password" required />
                    </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                    <button type='submit' className="Button" style={{ marginTop: 10 }}>
                        Submit
                    </button>
                </Form.Submit>
            </Form.Root>
        </div>

    );
}
