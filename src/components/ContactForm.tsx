import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		try {
			await axios.post('/api/sendEmail', { name, email, message })
			setName('')
			setEmail('')
			setMessage('')
			setIsSubmitted(true)
		} catch (error) {
			console.error(error)
			// Handle the error appropriately
		}
	}

	return (
		<div className="mx-auto">
			{isSubmitted ? (
				<p className="text-green-500">Thank you for your message!</p>
			) : (
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-1 p-2 block w-full rounded-md border-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 p-2 block w-full rounded-md border-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-sm  font-medium text-gray-700"
						>
							Message
						</label>
						<textarea
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							rows={4}
							className="mt-1 p-2 block w-full rounded-md border-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 hover:text-white border-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-150 touch-none"
					>
						Send Message
					</button>
				</form>
			)}
		</div>
	)
}

export default ContactForm
