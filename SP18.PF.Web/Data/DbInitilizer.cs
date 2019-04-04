using System;
using System.Linq;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using SP18.PF.Core.Features.Events;
using SP18.PF.Core.Features.Shared;
using SP18.PF.Core.Features.Tickets;
using SP18.PF.Core.Features.Tours;
using SP18.PF.Core.Features.Users;
using SP18.PF.Core.Features.Venues;
using SP18.PF.Web.Helpers;

namespace SP18.PF.Web.Data
{
    public static class DbInitilizer
    {
        public static void SeedData(DbContext dataContext)
        {
            SeedUsers(dataContext);
            SeedVenues(dataContext);
            SeedTours(dataContext);
            SeedScheduledEvents(dataContext);
            SeedTickets(dataContext);
        }

        private static void SeedTickets(DbContext dataContext)
        {
            var tickets = dataContext.Set<Ticket>();
            if (tickets.Any())
            {
                return;
            }
            var events = dataContext.Set<Event>().ToArray();
            var users = dataContext.Set<User>().ToArray();
            for (int i = 0; i < 5000; i++)
            {
                var @event = events[i % events.Length];
                var user = users[i % users.Length];

                tickets.Add(new Ticket
                {
                    Event = @event,
                    User = user,
                    PurchasePrice = @event.TicketPrice
                });
            }
            dataContext.SaveChanges();
        }

        private static void SeedScheduledEvents(DbContext dataContext)
        {
            var events = dataContext.Set<Event>();
            if (events.Any())
            {
                return;
            }
            var tours = dataContext.Set<Tour>().Select(x => x.Id).ToArray();
            var venues = dataContext.Set<Venue>().Select(x => x.Id).ToArray();
            for (int i = 0; i < 5; i++)
            {
                var tour = tours[i];
                for (int j = 0; j < 5; j++)
                {
                    Random RNG = new Random();
                    int randomNumber = RNG.Next(0, 4);

                    var venue = venues[randomNumber];
                    var start = DateTimeOffset.Now.AddDays(1 + i).AddHours(i);
                    events.Add(new Event
                    {
                        TourId = tour,
                        VenueId = venue,
                        TicketPrice = (i + 1) * 3,
                        EventStart = start,
                        EventEnd = start.AddHours(j + 1)
                    });
                }
            }
            dataContext.SaveChanges();
        }

        private static void SeedTours(DbContext dataContext)
        {
            var tours = dataContext.Set<Tour>();
            if (tours.Any())
            {
                return;
            }
            // TOUR 1
            tours.Add(new Tour
            {
                Name = $"Bruno Mars",
                Description = $"XXIVk Magic Tour; Funk, Pop, Soul",
                Pic = $"https://image.ibb.co/bAcBH7/bruno_mars_tour.jpg"
            });
            // TOUR 2
            tours.Add(new Tour
            {
                Name = $"Imagine Dragons",
                Description = $"Evolve World Tour; Alternative Rock, Indie Rock, Electropop",
                Pic = $"https://image.ibb.co/i1t7qS/evolvetour.jpg"
            });
            // TOUR 3
            tours.Add(new Tour
            {
                Name = $"Arianna Grande",
                Description = $"Dangerous Woman Tour; Pop, R&B",
                Pic = $"https://image.ibb.co/izLWH7/dangerouswomantour.jpg"
            });
            // TOUR 4
            tours.Add(new Tour
            {
                Name = $"Taylor Swift",
                Description = $"Reputation Statium Tour; Pop, Country, Contemporary",
                Pic = $"https://image.ibb.co/gLtwjn/twift.jpg"
            });
            // TOUR 5
            tours.Add(new Tour
            {
                Name = $"Drake",
                Description = $"Summer Sixteen Tour: Rap, R&B, Hip Hop",
                Pic = $"https://image.ibb.co/bZKfAS/Drake_Future.jpg"
            });

            dataContext.SaveChanges();
        }

        private static void SeedVenues(DbContext dataContext)
        {
            var venues = dataContext.Set<Venue>();
            if (venues.Any())
            {
                return;
            }
            // VENUE 1
                venues.Add(new Venue
                {
                    Name = $"Mercedes Benz Superdome",
                    PhysicalAddress = new Address
                    {
                        AddressLine1 = "1500 Sugar Bowl Dr",
                        City = "New Orleans",
                        State = "LA",
                        ZipCode = "70112"
                    },
                    Capacity = 20000,
                    Description = $"A domed sports and exhibition venue located in the Central Business District of New Orleans, Louisiana, United States.",
                    Pic = $"https://image.ibb.co/nvXp4n/mbs.jpg"
                });
            // VENUE 2
            venues.Add(new Venue
            {
                Name = $"Red Rocks Ampitheatre",
                PhysicalAddress = new Address
                {
                    AddressLine1 = "18300 W Alameda Pkwy",
                    City = "Morrison",
                    State = "CO",
                    ZipCode = "80465"
                },
                Capacity = 15000,
                Description = $"A rock structure near Morrison, Colorado, 10 miles west of Denver, where concerts are given in the open-air amphitheatre.",
                Pic = $"https://image.ibb.co/nhdU4n/rra.jpg"
            });
            // VENUE 3
            venues.Add(new Venue
            {
                Name = $"Madison Square Garden",
                PhysicalAddress = new Address
                {
                    AddressLine1 = "4 Pennsylvania Plaza",
                    City = "New York",
                    State = "NY",
                    ZipCode = "10001"
                },
                Capacity = 25000,
                Description = $"A multi-purpose indoor arena in the New York City borough of Manhattan, situated above Pennsylvannia Station",
                Pic = $"https://image.ibb.co/npa94n/msg.jpg"
            });
            // VENUE 4
            venues.Add(new Venue
            {
                Name = $"Hollywood Bowl",
                PhysicalAddress = new Address
                {
                    AddressLine1 = "2301 N Highland Ave",
                    City = "Los Angeles",
                    State = "CA",
                    ZipCode = "90068"
                },
                Capacity = 17000,
                Description = $"The Hollywood Bowl is known for its band shell, a distinctive set of concentric arches that graced the site from 1929.",
                Pic = $"https://image.ibb.co/nmCdx7/hwb.jpg"
            });
            // VENUE 5
            venues.Add(new Venue
            {
                Name = $"Staples Center",
                PhysicalAddress = new Address
                {
                    AddressLine1 = "1111 S Figueroa St",
                    City = "Los Angeles",
                    State = "CA",
                    ZipCode = "90015"
                },
                Capacity = 21000,
                Description = $"A multi-purpose sports arena in Downtown Los Angeles, California.",
                Pic = $"https://image.ibb.co/jkxdx7/sc.jpg"
            });

            dataContext.SaveChanges();
        }

        private static void SeedUsers(DbContext dataContext)
        {
            var users = dataContext.Set<User>();

            if (users.Any())
            {
                AddAdminUser(dataContext);
                return;
            }
            AddAdminUser(dataContext);
            for (int i = 0; i < 30; i++)
            {

                users.Add(new User
                {
                    Email = $"email{i}@envoc.com",
                    Password = CryptoHelpers.HashPassword($"password{i}"),
                    Role = Roles.Customer,
                    BillingAddress = new Address
                    {
                        AddressLine1 = "123 Place St",
                        City = "Hammond",
                        State = "LA",
                        ZipCode = "70403"
                    }
                });
            }
            dataContext.SaveChanges();
        }

        private static void AddAdminUser(DbContext dataContext)
        {
            var users = dataContext.Set<User>();
            if (users.Any(x => x.Email == "admin@envoc.com"))
            {
                return;
            }
            users.Add(new User
            {
                Email = $"admin@envoc.com",
                Password = CryptoHelpers.HashPassword("password"),
                Role = Roles.Admin,
                BillingAddress = new Address
                {
                    AddressLine1 = "123 Place St",
                    City = "Hammond",
                    State = "LA",
                    ZipCode = "70403"
                }
            });
            dataContext.SaveChanges();
        }
    }
}