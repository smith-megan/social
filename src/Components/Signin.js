import React from 'react'
import SignUp from './Signup'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const SignIn = () => (
	<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
		<Grid.Column style={{ maxWidth: 450 }}>
			<Header as="h2" color="teal" textAlign="center">
				Log-in to your account
			</Header>
			<Form size="large">
				<Segment stacked>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						placeholder="E-mail address"
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						placeholder="Password"
						type="password"
					/>

					<Button color="teal" fluid size="large">
						Login
					</Button>
				</Segment>
			</Form>
			<Message>
				New to us? <a href="#">Sign Up</a>
			</Message>
		</Grid.Column>
	</Grid>

	/* <div class="ui middle aligned center aligned grid off">
			<div class="column">
				<h2 class="ui teal image header">
					<div class="content">Log-in to your account</div>
				</h2>
				<form class="ui large form" id="sign_in_form">
					<div class="ui stacked segment">
						<div class="field">
							<div class="ui left icon input">
								<i class="user icon"></i>
								<input
									type="text"
									name="text"
									placeholder="Username"
									required
									id="signin_username"
								/>
							</div>
						</div>
						<div class="field">
							<div class="ui left icon input">
								<i class="lock icon"></i>
								<input
									type="password"
									name="password"
									placeholder="Password"
									required
									id="signin_password"
								/>
							</div>
						</div>
						<button
							class="ui fluid large teal submit button"
							type="submit"
						>
							Login
						</button>
					</div>

					<div class="ui error message active"></div>
				</form>

				<div class="ui message">
					New to us? <a href="javascript:;" id="signUp">Sign Up</a>
				</div>
			</div>
		</div> */
)

export default SignIn
