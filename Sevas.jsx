
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  HandHeart,
  CalendarDays,
  Heart,
  Share2,
  MapPin,
  Clock,
  Calendar,
  X
} from "lucide-react";

import "./Sevas.css";

// ==========================================
// SEVA DATA
// ==========================================

const sevasData = [
  {
    id: 1,
    title: "Subramanya Abhishekam for 7 Tuesdays",
    image: "/sevas/subramanya-abhishekam.jpg",
    type: "Daily Seva",
    deity: "Shiva",
    dosha: ["Kuja Dosham"],
    benefits: ["Harmony in Family", "Good Health"],
    schedule: "Every Tuesday for 7 weeks",
    temple: "Sri Subramanyaswamy Temple",
    location: "Hyderabad, Telangana",
    time: "18 November, Wednesday at 11:00 AM",
    price: 501,
    description: "Special Abhishekam performed for family harmony and good health."
  },
  {
    id: 2,
    title: "Sri Venkateswara Swamy Vratham for 7 Saturdays",
    image: "/sevas/venkateswara-vratham.jpg",
    type: "Weekly Seva",
    deity: "Shani",
    dosha: ["Shani Dosha"],
    benefits: ["Wealth and Prosperity", "Good Health"],
    schedule: "Every Saturday for 7 weeks",
    temple: "Padmavathi Sametha Sri Venkateswara Temple",
    location: "Tirupati, Andhra Pradesh",
    time: "Every Saturday at 8:00 AM",
    price: 701,
    description: "A sacred Vratham for prosperity, well-being and divine blessings."
  },
  {
    id: 3,
    title: "Rudrabhishekam for 11 Mondays in Kashi",
    image: "/sevas/rudrabhishekam.jpg",
    type: "Weekly Seva",
    deity: "Shiva",
    dosha: ["Graha Dosha"],
    benefits: ["Professional and Career Growth", "Good Health"],
    schedule: "Every Monday for 11 weeks",
    temple: "Rameshwar Mahadev Mandir",
    location: "Kashi, Uttar Pradesh",
    time: "Every Monday at 10:00 AM",
    price: 1101,
    description: "Rudrabhishekam dedicated to Lord Shiva for health and prosperity."
  },
  {
    id: 4,
    title: "Maha Navagraha Shanti Archana for 7 Days",
    image: "/sevas/navagraha.jpg",
    type: "Daily Seva",
    deity: "Brihaspati",
    dosha: ["Rahu Dosha", "Shani Dosha", "Chandra Graha Dosha"],
    benefits: ["Divine Energy", "Good Health"],
    schedule: "Every day for 7 days",
    temple: "Vaidika Yagashala",
    location: "Hyderabad, Telangana",
    time: "18 November at 11:00 AM",
    price: 1001,
    description: "A special Navagraha Archana to remove obstacles and difficulties."
  },
  {
    id: 5,
    title: "Sri Ganapathi Archana",
    image: "/sevas/ganapathi.jpg",
    type: "Daily Seva",
    deity: "Chauth Mata",
    dosha: ["Kaal Sarpa Dosha", "Rahu Dosha"],
    benefits: ["Wish Fulfillment", "Divine Energy"],
    schedule: "Special Archana",
    temple: "Sri Ezhuthu Perumal Temple",
    location: "Arugankulam, Tirunelveli",
    time: "17 November at 8:00 AM",
    price: 501,
    description: "A sacred worship seeking blessings for success and removing obstacles."
  },
  {
    id: 6,
    title: "Rudrabhishekam to Lord Shiva in Kashi",
    image: "/sevas/shiva-rudrabhishekam.jpg",
    type: "Daily Seva",
    deity: "Shiva",
    dosha: ["Shatru Badha"],
    benefits: ["Good Health", "Professional and Career Growth"],
    schedule: "Monday Special",
    temple: "Rameshwar Mahadev Mandir",
    location: "Kashi, Uttar Pradesh",
    time: "17 November at 10:00 AM",
    price: 1101,
    description: "A special Monday Rudrabhishekam for removing obstacles."
  },
  {
    id: 7,
    title: "Sri Subramanya Swamy Abhishekam",
    image: "/sevas/subramanya-swamy.jpg",
    type: "Monthly Seva",
    deity: "Shiva",
    dosha: ["Kuja Dosham"],
    benefits: ["Marriage and Family Happiness", "Wish Fulfillment"],
    schedule: "Monthly Special",
    temple: "Sri Subramanya Swamy Temple",
    location: "Hyderabad, Telangana",
    time: "Monthly schedule",
    price: 751,
    description: "Special prayers for marriage, children and family happiness."
  },
  {
    id: 8,
    title: "Venkateswara Swamy Vratham",
    image: "/sevas/venkateswara-special.jpg",
    type: "Monthly Seva",
    deity: "Shani",
    dosha: ["Graha Dosha"],
    benefits: ["Success", "Wealth and Prosperity"],
    schedule: "Monthly Special",
    temple: "Sri Venkateswara Temple",
    location: "Tirupati, Andhra Pradesh",
    time: "Monthly schedule",
    price: 801,
    description: "Special Vratham for success, financial growth and prosperity."
  }
];

// ==========================================
// CATEGORIES
// ==========================================

const categories = [
  { name: "All Sevas", icon: LayoutGrid },
  { name: "Daily Seva", icon: HandHeart },
  { name: "Chadavas", icon: HandHeart },
  { name: "Weekly Seva", icon: CalendarDays },
  { name: "Monthly Seva", icon: Calendar }
];

// ==========================================
// FILTER OPTIONS
// ==========================================

const filterGroups = [
  {
    title: "Deity",
    options: [
      "Shiva",
      "Maa Kamakhya",
      "Chauth Mata",
      "Brihaspati",
      "Shani",
      "Rahu",
      "Maa Shakti",
      "Blessing of a child"
    ]
  },
  {
    title: "Dosha",
    options: [
      "Kuja Dosham",
      "Tantra Badha",
      "Shatru Badha",
      "Graha Dosha",
      "Pitru Dosha",
      "Shani Dosha",
      "Kaal Sarpa Dosha",
      "Rahu Dosha"
    ]
  },
  {
    title: "Benefit",
    options: [
      "Shakti Prapti",
      "Wish Fulfillment",
      "Divine Energy",
      "Suabhagya",
      "Long Life of Husband",
      "Harmony in Family",
      "Good Health",
      "Wealth and Prosperity",
      "Professional and Career Growth",
      "Marriage and Family Happiness"
    ]
  }
];

// ==========================================
// SEVAS COMPONENT
// ==========================================

export default function Sevas() {
  const navigate = useNavigate();

  // Search and category state
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Sevas");

  // Filter state
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [draftFilters, setDraftFilters] = useState([]);

  // Filter modal state
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("Deity");
  const [filterSearch, setFilterSearch] = useState("");

  // Other state
  const [favorites, setFavorites] = useState([]);

  // ========================================
  // FILTERED SEVAS
  // ========================================

  const filteredSevas = useMemo(() => {
    return sevasData.filter((seva) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        seva.title.toLowerCase().includes(searchTerm) ||
        seva.temple.toLowerCase().includes(searchTerm) ||
        seva.deity.toLowerCase().includes(searchTerm);

      const matchesCategory =
        activeCategory === "All Sevas" ||
        seva.type === activeCategory;

      // OR within a filter group.
      // AND between different filter groups.
      const matchesFilters = filterGroups.every((group) => {
        const selectedInGroup = selectedFilters.filter((filter) =>
          group.options.includes(filter)
        );

        if (selectedInGroup.length === 0) return true;

        const sevaValues =
          group.title === "Deity"
            ? [seva.deity]
            : group.title === "Dosha"
              ? seva.dosha
              : seva.benefits;

        return selectedInGroup.some((filter) =>
          sevaValues.includes(filter)
        );
      });

      return matchesSearch && matchesCategory && matchesFilters;
    });
  }, [search, activeCategory, selectedFilters]);

  // ========================================
  // OPEN FILTER MODAL
  // ========================================

  const openFilterModal = () => {
    setDraftFilters([...selectedFilters]);
    setFilterSearch("");
    setActiveFilterTab("Deity");
    setFilterModalOpen(true);
  };

  // ========================================
  // FILTER HANDLERS
  // ========================================

  const toggleDraftFilter = (option) => {
    setDraftFilters((previous) =>
      previous.includes(option)
        ? previous.filter((item) => item !== option)
        : [...previous, option]
    );
  };

  const applyFilters = () => {
    setSelectedFilters([...draftFilters]);
    setActiveCategory("All Sevas");
    setSearch("");
    setFilterModalOpen(false);
  };

  const clearModalFilters = () => {
    setDraftFilters([]);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setDraftFilters([]);
    setActiveCategory("All Sevas");
    setSearch("");
  };

  // ========================================
  // FAVORITES
  // ========================================

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // ========================================
  // OPEN SEVA DETAILS PAGE
  // ========================================

  const handleBooking = (seva) => {
    navigate(`/seva-details/${seva.id}`, {
      state: {
        seva: seva
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // ========================================
  // SHARE SEVA
  // ========================================

  const handleShare = async (seva) => {
    const shareData = {
      title: seva.title,
      text: seva.description,
      url: window.location.origin + `/seva-details/${seva.id}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Seva link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  };

  // ========================================
  // SEVAS LISTING PAGE
  // ========================================

  return (
    <div className="sevas-page">

      {/* PAGE INTRO */}

      <section className="sevas-intro">
        <h1>Discover Sacred Pujas & Divine Blessings</h1>

        <p>
          Receive continued divine blessings through temple offerings
          performed with your Name, Gothram and Sankalpam.
        </p>

        {/* SEARCH */}

        <div className="sevas-search-area">
          <div className="sevas-search-box">
            <input
              type="text"
              placeholder="What seva are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Search size={21} />
          </div>

          <button
            type="button"
            className="sevas-filter-toggle"
            onClick={openFilterModal}
            aria-label="Open seva filters"
          >
            <SlidersHorizontal size={21} />
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}

      <section className="sevas-content">

        {/* SIDEBAR */}

        <aside className="sevas-sidebar">
          <div className="sidebar-section">
            <h4>Seva type</h4>

            <div className="seva-categories">
              {categories.map((category) => {
                const Icon = category.icon;

                const count =
                  category.name === "All Sevas"
                    ? sevasData.length
                    : sevasData.filter(
                        (item) => item.type === category.name
                      ).length;

                return (
                  <button
                    type="button"
                    key={category.name}
                    className={`category-button ${
                      activeCategory === category.name ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <span className="category-icon">
                      <Icon size={20} />
                    </span>

                    <span>{category.name}</span>

                    <span className="category-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SIDEBAR FILTERS */}

          {filterGroups.map((group) => (
            <div
              className="sidebar-section filter-group"
              key={group.title}
            >
              <h4>{group.title}</h4>

              {group.options.slice(0, 5).map((option) => (
                <label className="filter-option" key={option}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option)}
                    onChange={() => {
                      setSelectedFilters((previous) =>
                        previous.includes(option)
                          ? previous.filter((item) => item !== option)
                          : [...previous, option]
                      );
                    }}
                  />

                  <span>{option}</span>
                </label>
              ))}
            </div>
          ))}

          <button
            type="button"
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear all filters
          </button>
        </aside>

        {/* SEVAS LISTING */}

        <main className="sevas-listing">

          {/* LISTING HEADER */}

          <div className="sevas-listing-header">
            <div>
              <h2>
                {activeCategory === "All Sevas"
                  ? "All Sevas"
                  : activeCategory}
              </h2>

              <p>
                Daily, Weekly and Monthly Sevas for peace,
                prosperity and divine blessings
              </p>
            </div>

            <span className="seva-total">
              {filteredSevas.length} sevas
            </span>
          </div>

          {/* SEVA CARDS */}

          {filteredSevas.length > 0 ? (
            <>
              <div className="sevas-grid">
                {filteredSevas.map((seva) => (
                  <article className="seva-card" key={seva.id}>

                    {/* IMAGE */}

                    <div className="seva-image-wrapper">
                      <img
                        src={seva.image}
                        alt={seva.title}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.classList.add(
                            "seva-image-fallback"
                          );
                        }}
                      />

                      {/* IMAGE ACTIONS */}

                      <div className="seva-image-actions">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(seva.id)}
                          aria-label="Add to favorites"
                        >
                          <Heart
                            size={18}
                            fill={
                              favorites.includes(seva.id)
                                ? "#d92323"
                                : "none"
                            }
                            color={
                              favorites.includes(seva.id)
                                ? "#d92323"
                                : "#333"
                            }
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShare(seva)}
                          aria-label="Share seva"
                        >
                          <Share2 size={17} />
                        </button>
                      </div>
                    </div>

                    {/* CARD CONTENT */}

                    <div className="seva-card-content">
                      <div className="seva-tag">
                        <span>✦</span>
                        {seva.schedule}
                        <span>✦</span>
                      </div>

                      <h3>{seva.title}</h3>

                      <div className="seva-benefits">
                        {seva.benefits.map((benefit) => (
                          <span key={benefit}>{benefit}</span>
                        ))}
                      </div>

                      <div className="seva-information">
                        <div className="seva-info-row schedule-info">
                          <CalendarDays size={17} />
                          <span>{seva.schedule}</span>
                        </div>

                        <div className="seva-info-row">
                          <MapPin size={17} />
                          <span>
                            {seva.temple}, {seva.location}
                          </span>
                        </div>

                        <div className="seva-info-row">
                          <Clock size={17} />
                          <span>{seva.time}</span>
                        </div>
                      </div>

                      <div className="seva-price">
                        <span>Offering amount</span>
                        <strong>₹{seva.price}</strong>
                      </div>

                      {/* BOOK NOW: OPEN DETAILS PAGE */}

                      <button
                        type="button"
                        className="book-seva-button"
                        onClick={() => handleBooking(seva)}
                      >
                        BOOK NOW
                        <span>→</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* END OF RESULTS */}

              <div className="sevas-end-message">
                <p>You've reached the end of available sevas</p>
                <span>
                  {filteredSevas.length} of {filteredSevas.length} sevas
                </span>
              </div>
            </>
          ) : (
            <div className="no-sevas">
              <Search size={35} />

              <h3>No Sevas Found</h3>

              <p>Try changing your search or filters.</p>

              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </section>

      {/* FILTER MODAL */}

      {filterModalOpen && (
        <div
          className="seva-filter-overlay"
          onClick={() => setFilterModalOpen(false)}
        >
          <div
            className="seva-filter-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="seva-filter-header">
              <h2>Seva Filters</h2>

              <button
                type="button"
                className="seva-filter-close"
                onClick={() => setFilterModalOpen(false)}
                aria-label="Close filters"
              >
                <X size={21} />
              </button>
            </div>

            {/* MODAL BODY */}

            <div className="seva-filter-body">

              {/* FILTER TABS */}

              <div className="seva-filter-tabs">
                {filterGroups.map((group) => (
                  <button
                    type="button"
                    key={group.title}
                    className={
                      activeFilterTab === group.title ? "active" : ""
                    }
                    onClick={() => {
                      setActiveFilterTab(group.title);
                      setFilterSearch("");
                    }}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              {/* FILTER OPTIONS */}

              <div className="seva-filter-options">
                <h3>{activeFilterTab}</h3>

                <div className="seva-filter-search">
                  <Search size={17} />

                  <input
                    type="text"
                    placeholder={`Search ${activeFilterTab}`}
                    value={filterSearch}
                    onChange={(e) => setFilterSearch(e.target.value)}
                  />
                </div>

                <div className="seva-filter-checkboxes">
                  {(
                    filterGroups.find(
                      (group) => group.title === activeFilterTab
                    )?.options || []
                  )
                    .filter((option) =>
                      option.toLowerCase().includes(
                        filterSearch.toLowerCase()
                      )
                    )
                    .map((option) => (
                      <label
                        key={option}
                        className="seva-modal-option"
                      >
                        <input
                          type="checkbox"
                          checked={draftFilters.includes(option)}
                          onChange={() => toggleDraftFilter(option)}
                        />

                        <span>{option}</span>
                      </label>
                    ))}

                  {(
                    filterGroups.find(
                      (group) => group.title === activeFilterTab
                    )?.options || []
                  ).filter((option) =>
                    option.toLowerCase().includes(
                      filterSearch.toLowerCase()
                    )
                  ).length === 0 && (
                    <p className="seva-filter-empty">
                      No options found.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}

            <div className="seva-filter-footer">
              <button
                type="button"
                className="seva-filter-clear"
                onClick={clearModalFilters}
              >
                Clear
              </button>

              <button
                type="button"
                className="seva-filter-apply"
                onClick={applyFilters}
              >
                Apply
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
