import Image from 'next/image'
import HeroImage from '../../public/placeholder.svg'; // path l'image mn directory 'public'

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Jane has over 15 years of experience in the industry and is passionate about creating innovative solutions.',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'John is a tech enthusiast with a knack for turning complex problems into elegant solutions.',
  },
  {
    name: 'Emily Brown',
    role: 'Head of Design',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Emily brings creativity and user-centric design principles to every project she touches.',
  },
]

export default function AboutUsSection() {
  return (
    <section className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Learn about our mission and the team behind our success.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-500">
            At [Your Company Name], we're committed to revolutionizing [your industry] through innovative technology and exceptional service. Our goal is to empower businesses and individuals with cutting-edge solutions that drive growth and success.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Image
                  className="w-40 h-40 rounded-full"
                  src={HeroImage}
                  alt={member.name}
                  width={160}
                  height={160}
                />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
          <p className="mt-4 text-lg text-gray-500">
            Founded in [year], [Your Company Name] began with a simple idea: to make [your industry] more accessible and efficient for everyone. Since then, we've grown from a small startup to a leader in our field, serving clients across the globe.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs. As we look to the future, we remain dedicated to pushing the boundaries of what's possible in [your industry].
          </p>
        </div>
      </div>
    </section>
  )
}