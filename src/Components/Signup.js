import React from 'react'
import { Button, Form, Modal, Header, Icon, Message } from 'semantic-ui-react'

function SignUp() {
	const [open, setOpen] = React.useState(false)

	return (
		<Modal
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
		>
			<Header icon>
				<Icon name="archive" />
				Archive Old Messages
			</Header>
			<Modal.Content>
				<p>
					Your inbox is getting full, would you like us to enable
					automatic archiving of old messages?
				</p>
			</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => setOpen(false)}
				>
					<Icon name="remove" /> No
				</Button>
				<Button color="green" inverted onClick={() => setOpen(false)}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
		// <div class="ui page dimmer off" id="signupmodal_dim">
		// 	<div class="ui modal" id="modal_signup">
		// 		<div class="header">New User?</div>
		// 		<div class="content">
		// 			<form class="ui form" id="user_create-form">
		// 				<div class="field required">
		// 					<div class="ui left icon input">
		// 						<i class="user icon"></i>
		// 						<input
		// 							type="text"
		// 							name="text"
		// 							placeholder="Username"
		// 							required
		// 						/>
		// 					</div>
		// 				</div>
		// 				<div class="field required">
		// 					<div class="ui left icon input">
		// 						<i class="lock icon"></i>
		// 						<input
		// 							type="password"
		// 							name="password"
		// 							placeholder="Password"
		// 							required
		// 						/>
		// 					</div>
		// 				</div>
		// 				<button class="ui button" type="submit">
		// 					Submit
		// 				</button>
		// 				<div class="ui display error message active"></div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default SignUp
