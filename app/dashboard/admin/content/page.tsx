"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  status: "draft" | "published" | "past"
}

interface News {
  id: string
  title: string
  date: string
  author: string
  category: string
  description: string
  image: string
  status: "draft" | "published"
}

interface BlogPost {
  id: string
  title: string
  date: string
  author: string
  category: string
  description: string
  image: string
  status: "draft" | "published"
  type: "blog" | "podcast"
}

interface Publication {
  id: string
  title: string
  authors: string[]
  date: string
  type: "journal" | "book" | "conference" | "thesis"
  publisher: string
  abstract: string
  link?: string
  status: "draft" | "published"
}

export default function ContentManagementPage() {
  const [activeTab, setActiveTab] = useState("events")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  
  // Events state
  const [events, setEvents] = useState<Event[]>([
    {
      id: "EVT2023001",
      title: "Theological Symposium 2023",
      date: "2023-03-25",
      time: "9:00 AM - 4:00 PM",
      location: "AIIS Main Campus, Addis Ababa",
      description: "Join us for a day of theological discussions and presentations by leading scholars in the field.",
      image: "/placeholder.svg?height=400&width=800",
      status: "past",
    },
    {
      id: "EVT2023002",
      title: "Leadership Workshop Series",
      date: "2023-04-10",
      time: "10:00 AM - 3:00 PM",
      location: "AIIS Conference Hall",
      description: "A three-day workshop focusing on developing leadership skills for ministry contexts.",
      image: "/placeholder.svg?height=400&width=800",
      status: "past",
    },
    {
      id: "EVT2023003",
      title: "Graduation Ceremony 2023",
      date: "2023-05-20",
      time: "2:00 PM - 5:00 PM",
      location: "AIIS Auditorium",
      description: "Celebrating our graduates and their academic achievements.",
      image: "/placeholder.svg?height=400&width=800",
      status: "past",
    },
    {
      id: "EVT2023004",
      title: "Winter Theological Conference",
      date: "2023-12-15",
      time: "9:00 AM - 5:00 PM",
      location: "AIIS Main Campus",
      description: "Annual theological conference featuring speakers from around Africa.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
    },
    {
      id: "EVT2024001",
      title: "New Year Prayer Service",
      date: "2024-01-01",
      time: "10:00 AM - 12:00 PM",
      location: "AIIS Chapel",
      description: "Join us for a special prayer service to begin the new year.",
      image: "/placeholder.svg?height=400&width=800",
      status: "draft",
    },
  ])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [eventFormData, setEventFormData] = useState<Omit<Event, "id" | "status">>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: "/placeholder.svg?height=400&width=800",
  })
  
  // News state
  const [news, setNews] = useState<News[]>([
    {
      id: "NEWS2023001",
      title: "AIIS Signs New Partnership with Global Theological Network",
      date: "2023-02-15",
      author: "AIIS Communications Team",
      category: "Partnerships",
      description: "AIIS has established a new partnership with the Global Theological Network, expanding opportunities for student exchanges and collaborative research.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
    },
    {
      id: "NEWS2023002",
      title: "Faculty Research Grant Awarded",
      date: "2023-01-30",
      author: "AIIS Research Office",
      category: "Research",
      description: "Dr. Esckinder Taddesse has been awarded a prestigious research grant to study contextual theology in East Africa.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
    },
    {
      id: "NEWS2023003",
      title: "New MTh Program Launched",
      date: "2022-12-10",
      author: "AIIS Academic Affairs Office",
      category: "Academics",
      description: "AIIS is proud to announce the launch of a new Master of Theology program with specialization in African Christian Ethics.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
    },
    {
      id: "NEWS2023004",
      title: "AIIS Hosts International Theological Conference",
      date: "2023-11-05",
      author: "AIIS Communications Team",
      category: "Events",
      description: "AIIS recently hosted an international theological conference with participants from over 15 countries.",
      image: "/placeholder.svg?height=400&width=800",
      status: "draft",
    },
  ])
  const [selectedNews, setSelectedNews] = useState<News | null>(null)
  const [newsFormData, setNewsFormData] = useState<Omit<News, "id" | "status">>({
    title: "",
    date: "",
    author: "",
    category: "",
    description: "",
    image: "/placeholder.svg?height=400&width=800",
  })
  
  // Blog/Podcast state
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: "BLOG2023001",
      title: "Contextualizing Theology in the African Context",
      date: "2023-02-20",
      author: "Dr. Endale Gebremeskel",
      category: "Theology",
      description: "Exploring the importance of contextual theology in African Christian communities.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
      type: "blog",
    },
    {
      id: "BLOG2023002",
      title: "The Role of Theological Education in Community Transformation",
      date: "2023-01-25",
      author: "Pr. Chalachew Mekere",
      category: "Education",
      description: "How theological education can be a catalyst for positive social change in communities.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
      type: "blog",
    },
    {
      id: "POD2023001",
      title: "Biblical Languages and African Hermeneutics",
      date: "2022-12-15",
      author: "Inst. Eyob Mulau",
      category: "Biblical Studies",
      description: "Examining the intersection of biblical languages and African interpretive approaches.",
      image: "/placeholder.svg?height=400&width=800",
      status: "published",
      type: "podcast",
    },
    {
      id: "POD2023002",
      title: "Women in Ministry: African Perspectives",
      date: "2023-10-10",
      author: "Dr. Abeba Belay",
      category: "Ministry",
      description: "A discussion on the role of women in ministry from various African perspectives.",
      image: "/placeholder.svg?height=400&width=800",
      status: "draft",
      type: "podcast",
    },
  ])
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null)
  const [blogFormData, setBlogFormData] = useState<Omit<BlogPost, "id" | "status">>({
    title: "",
    date: "",
    author: "",
    category: "",
    description: "",
    image: "/placeholder.svg?height=400&width=800",
    type: "blog",
  })
  
  // Publications state
  const [publications, setPublications] = useState<Publication[]>([
    {
      id: "PUB2023001",
      title: "Contextualizing Theology in the Ethiopian Context",
      authors: ["Dr. Esckinder Taddesse"],
      date: "2018-06-15",
      type: "journal",
      publisher: "African Theological Journal",
      abstract: "This paper explores approaches to contextualizing theology within Ethiopian cultural and religious contexts.",
      link: "https://example.com/publication1",
      status: "published",
    },
    {
      id: "PUB2023002",
      title: "Leadership Development in African Churches",
      authors: ["Dr. Esckinder Taddesse", "Dr. Endale Gebremeskel"],
      date: "2016-03-10",
      type: "journal",
      publisher: "International Journal of Missiology",
      abstract: "A study of effective leadership development models in African church contexts.",
      status: "published",
    },
    {
      id: "PUB2023003",
      title: "The Role of Theological Education in Community Transformation",
      authors: ["Dr. Esckinder Taddesse"],
      date: "2014-09-22",
      type: "journal",
      publisher: "Journal of Contextual Theology",
      abstract: "This research examines how theological education can contribute to community transformation in African contexts.",
      status: "published",
    },
    {
      id: "PUB2023004",
      title: "African Christology: Historical and Contemporary Perspectives",
      authors: ["Dr. Endale Gebremeskel", "Dr. Abeba Belay"],
      date: "2023-10-05",
      type: "book",
      publisher: "AIIS Press",
      abstract: "A comprehensive examination of Christological perspectives in African theology, both historical and contemporary.",
      status: "draft",
    },
  ])
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)
  const [publicationFormData, setPublicationFormData] = useState<Omit<Publication, "id" | "status">>({
    title: "",
    authors: [""],
    date: "",
    type: "journal",
    publisher: "",
    abstract: "",
    link: "",
  })
  
  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  // Handle input changes for different content types
  const handleEventInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEventFormData({
      ...eventFormData,
      [name]: value,
    })
  }

  const handleNewsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewsFormData({
      ...newsFormData,
      [name]: value,
    })
  }

  const handleBlogInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBlogFormData({
      ...blogFormData,
      [name]: value,
    })
  }

  const handlePublicationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPublicationFormData({
      ...publicationFormData,
      [name]: value,
    })
  }

  const handlePublicationAuthorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const authors = e.target.value.split(',').map(author => author.trim()).filter(Boolean)
    setPublicationFormData({
      ...publicationFormData,
      authors,
    })
  }

  // Create new content
  const handleCreateEvent = () => {
    const newEvent: Event = {
      id: `EVT${new Date().getFullYear()}${(events.length + 1).toString().padStart(3, '0')}`,
      ...eventFormData,
      status: "draft",
    }
    setEvents([...events, newEvent])
    setIsCreateDialogOpen(false)
    resetForms()
    toast({
      title: "Event created",
      description: `"${newEvent.title}" has been created successfully.`,
    })
  }

  const handleCreateNews = () => {
    const newNews: News = {
      id: `NEWS${new Date().getFullYear()}${(news.length + 1).toString().padStart(3, '0')}`,
      ...newsFormData,
      status: "draft",
    }
    setNews([...news, newNews])
    setIsCreateDialogOpen(false)
    resetForms()
    toast({
      title: "News article created",
      description: `"${newNews.title}" has been created successfully.`,
    })
  }

  const handleCreateBlogPost = () => {
    const newBlogPost: BlogPost = {
      id: `${blogFormData.type === 'blog' ? 'BLOG' : 'POD'}${new Date().getFullYear()}${(blogPosts.length + 1).toString().padStart(3, '0')}`,
      ...blogFormData,
      status: "draft",
    }
    setBlogPosts([...blogPosts, newBlogPost])
    setIsCreateDialogOpen(false)
    resetForms()
    toast({
      title: `${newBlogPost.type === 'blog' ? 'Blog post' : 'Podcast'} created`,
      description: `"${newBlogPost.title}" has been created successfully.`,
    })
  }

  const handleCreatePublication = () => {
    const newPublication: Publication = {
      id: `PUB${new Date().getFullYear()}${(publications.length + 1).toString().padStart(3, '0')}`,
      ...publicationFormData,
      status: "draft",
    }
    setPublications([...publications, newPublication])
    setIsCreateDialogOpen(false)
    resetForms()
    toast({
      title: "Publication created",
      description: `"${newPublication.title}" has been created successfully.`,
    })
  }

  // Edit content
  const handleEditEvent = () => {
    if (!selectedEvent) return
    const updatedEvents = events.map(event => 
      event.id === selectedEvent.id 
        ? { ...event, ...eventFormData }
        : event
    )
    setEvents(updatedEvents)
    setIsEditDialogOpen(false)
    resetForms()
    toast({
      title: "Event updated",
      description: `"${eventFormData.title}" has been updated successfully.`,
    })
  }

  const handleEditNews = () => {
    if (!selectedNews) return
    const updatedNews = news.map(item => 
      item.id === selectedNews.id 
        ? { ...item, ...newsFormData }
        : item
    )
    setNews(updatedNews)
    setIsEditDialogOpen(false)
    resetForms()
    toast({
      title: "News article updated",
      description: `"${newsFormData.title}" has been updated successfully.`,
    })
  }

  const handleEditBlogPost = () => {
    if (!selectedBlogPost) return
    const updatedBlogPosts = blogPosts.map(post => 
      post.id === selectedBlogPost.id 
        ? { ...post, ...blogFormData }
        : post
    )
    setBlogPosts(updatedBlogPosts)
    setIsEditDialogOpen(false)
    resetForms()
    toast({
      title: `${blogFormData.type === 'blog' ? 'Blog post' : 'Podcast'} updated`,
      description: `"${blogFormData.title}" has been updated successfully.`,
    })
  }

  const handleEditPublication = () => {
    if (!selectedPublication) return
    const updatedPublications = publications.map(pub => 
      pub.id === selectedPublication.id 
        ? { ...pub, ...publicationFormData }
        : pub
    )
    setPublications(updatedPublications)
    setIsEditDialogOpen(false)
    resetForms()
    toast({
      title: "Publication updated",
      description: `"${publicationFormData.title}" has been updated successfully.`,
    })
  }

  // Delete content
  const handleDeleteContent = () => {
    if (activeTab === "events" && selectedEvent) {
      const updatedEvents = events.filter(event => event.id !== selectedEvent.id)
      setEvents(updatedEvents)
      toast({
        title: "Event deleted",
        description: `"${selectedEvent.title}" has been deleted.`,
        variant: "destructive",
      })
    } else if (activeTab === "news" && selectedNews) {
      const updatedNews = news.filter(item => item.id !== selectedNews.id)
      setNews(updatedNews)
      toast({
        title: "News article deleted",
        description: `"${selectedNews.title}" has been deleted.`,
        variant: "destructive",
      })
    } else if (activeTab === "blog" && selectedBlogPost) {
      const updatedBlogPosts = blogPosts.filter(post => post.id !== selectedBlogPost.id)
      setBlogPosts(updatedBlogPosts)
      toast({
        title: `${selectedBlogPost.type === 'blog' ? 'Blog post' : 'Podcast'} deleted`,
        description: `"${selectedBlogPost.title}" has been deleted.`,
        variant: "destructive",
      })
    } else if (activeTab === "publications" && selectedPublication) {
      const updatedPublications = publications.filter(pub => pub.id !== selectedPublication.id)
      setPublications(updatedPublications)
      toast({
        title: "Publication deleted",
        description: `"${selectedPublication.title}" has been deleted.`,
        variant: "destructive",
      })
    }
    
    setIsDeleteDialogOpen(false)
  }

  // Open dialogs
  const openCreateDialog = () => {
    resetForms()
    setIsCreateDialogOpen(true)
  }

  const openEditDialog = (contentType: string, content: any) => {
    if (contentType === "events") {
      setSelectedEvent(content)
      setEventFormData({
        title: content.title,
        date: content.date,
        time: content.time,
        location: content.location,
        description: content.description,
        image: content.image,
      })
    } else if (contentType === "news") {
      setSelectedNews(content)
      setNewsFormData({
        title: content.title,
        date: content.date,
        author: content.author,
        category: content.category,
        description: content.description,
        image: content.image,
      })
    } else if (contentType === "blog") {
      setSelectedBlogPost(content)
      setBlogFormData({
        title: content.title,
        date: content.date,
        author: content.author,
        category: content.category,
        description: content.description,
        image: content.image,
        type: content.type,
      })
    } else if (contentType === "publications") {
      setSelectedPublication(content)
      setPublicationFormData({
        title: content.title,
        authors: content.authors,
        date: content.date,
        type: content.type,
        publisher: content.publisher,
        abstract: content.abstract,
        link: content.link || "",
      })
    }
    
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (contentType: string, content: any) => {
    if (contentType === "events") {
      setSelectedEvent(content)
    } else if (contentType === "news") {
      setSelectedNews(content)
    } else if (contentType === "blog") {
      setSelectedBlogPost(content)
    } else if (contentType === "publications") {
      setSelectedPublication(content)
    }
    
    setIsDeleteDialogOpen(true)
  }

  const openViewDialog = (contentType: string, content: any) => {
    if (contentType === "events") {
      setSelectedEvent(content)
    } else if (contentType === "news") {
      setSelectedNews(content)
    } else if (contentType === "blog") {
      setSelectedBlogPost(content)
    } else if (contentType === "publications") {
      setSelectedPublication(content)
    }
    
    setIsViewDialogOpen(true)
  }

  // Reset forms
  const resetForms = () => {
    setEventFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "/placeholder.svg?height=400&width=800",
    })
    
    setNewsFormData({
      title: "",
      date: "",
      author: "",
      category: "",
      description: "",
      image: "/placeholder.svg?height=400&width=800",
    })
    
    setBlogFormData({
      title: "",
      date: "",
      author: "",
      category: "",
      description: "",
      image: "/placeholder.svg?height=400&width=800",
      type: "blog",
    })
    
    setPublicationFormData({
      title: "",
      authors: [""],
      date: "",
      type: "journal",
      publisher: "",
      abstract: "",
      link: "",
    })
    
    setSelectedEvent(null)
    setSelectedNews
}

}