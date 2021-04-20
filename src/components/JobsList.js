import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const JobsList = () => {
    const [jobList, setJobList] = useState([]);


    useEffect(() => {
        async function FetchJobs() {
            const response = await fetch('http://localhost:3001/jobs')
            const json = await response.json()
            console.log({ json })
            setJobList(json)
        }
        FetchJobs()
    }, [])

    return (
        <div>
            <h1>All jobs here</h1>
            {jobList.map(j => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    )
}
export default JobsList