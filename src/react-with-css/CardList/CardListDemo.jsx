// src/components/CardList.jsx
import './CardListStyle.css'

const people = [
    {
        id: 1,
        name: "Alice Johnson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        address: "123 Maple Street, Springfield",
        gender: "Female",
    },
    {
        id: 2,
        name: "Bob Smith",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        address: "456 Oak Avenue, Rivertown",
        gender: "Male",
    },
    {
        id: 3,
        name: "Clara Lee",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        address: "789 Pine Road, Lakeview",
        gender: "Female",
    },
]

export default function CardListDemo() {
    return (
        <div className="card-grid">
            {people.map(person => (
                <div key={person.id} className="card">
                    <img src={person.image} alt={person.name} className="card-image" />
                    <h2 className="card-title">{person.name}</h2>
                    <p className="card-gender">{person.gender}</p>
                    <p className="card-address">{person.address}</p>
                </div>
            ))}
        </div>
    )
}
