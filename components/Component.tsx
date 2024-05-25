'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import Sparkle from 'react-sparkle'

const Component = () => {
	const [success, setSuccess] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const btnRef = useRef<HTMLButtonElement>(null)

	const randomPosition = () => {
		const container = containerRef.current
		const button = btnRef.current

		if (container && button) {
			const containerRect = container.getBoundingClientRect()
			const buttonRect = button.getBoundingClientRect()

			const maxLeft = containerRect.width - buttonRect.width
			const maxTop = containerRect.height - buttonRect.height

			const randomLeft = Math.floor(Math.random() * maxLeft) + 10
			const randomTop = Math.floor(Math.random() * maxTop) + 10

			button.style.left = `${randomLeft}px`
			button.style.top = `${randomTop}px`
		}
	}

	return (
		<div className='flex items-center justify-center h-screen bg-[#070F2B]'>
			<div
				ref={containerRef}
				className='p-8 bg-white backdrop-blur-md rounded-lg container_ref w-[400px] md:w-[550px]  shadow-md flex flex-col relative'
				style={{ position: 'relative' }}
			>
				<Image
					className='mx-auto'
					alt='img'
					width={100}
					height={100}
					src={'/love.png'}
				/>

				<h4 className='text-3xl font-bold italic text-center m-8'>
					{success
						? 'Yeah. I love you too My Lady.'
						: 'Ma Ma Kwi, Do you love me?'}
				</h4>

				<div className='flex items-center justify-between mt-10'>
					<button
						onClick={() => setSuccess(true)}
						className='my-button yes'
					>
						Yes. I love you
					</button>
					<button
						onClick={randomPosition}
						onMouseEnter={randomPosition}
						ref={btnRef}
						className='no bottom-[31px] bg-red-400  right-[31px]'
						style={{ position: 'absolute' }}
					>
						No
					</button>
				</div>

				{success && <Sparkle />}
			</div>
		</div>
	)
}

export default Component
