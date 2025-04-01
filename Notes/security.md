Ransomware: lock up server
Advanced persistent threat: backdoor into source code
DDOS attack: sent a bunch of requests to Amazon to take down the software
Sony Entertainment breach: private information taken by North Korea
VA unencrypted data: private health information was not encrypted, identity theft, took all the data
AWS, Yahoo, CNN, Dell DDOS Mafiaboy: broke a ton of stuff, executed scripts from a 14 year old. Took the whole internet down basically.

Basically cybercrime is super expensive: more than natural disasters and brings more money in than illegal drugs.

OWASP 10: Open Worldwide Application Security Project

Top 10 security problems
## 1: Broken Access Control
when there is an author role or viewer role in the system. Protect the roles in the system.

Least privilege access violation: can't have a commentor administer the content without being an admin.

Note that we can't secure things on the frontend. Like magic url will not be secure. You need to secure things on the backend. So if you had a url that included your customer id, then anyone could access it.

This file `../../../etc/passwd` has linux files.

If we use static middleware (like the public files), then we could use this to get to the passwords. The `Express` middleware handles this though.

## 2: Crypographic Failures
Not encrypting at rest or transit, weak cryptography (SHA1, MD5), Misused cryptography, no salt or wrong parameters

## 3: Injection
User supplied data that is not sanitized. When a user supplies data that isn't sanitized.

```
Bud <img src='x' onerror...> Hanson

// SQL injection
Bud`OR 1 = 1 OR name=` Hanson
```
User supplied data that is programmatically executed

## 4: Insecure Design
- people not aware of best practices
- unlimited trial accounts
    - sign up with multiple emails
    - overload with requests (DDOS, Distributed Denial Of Service)
- customer data not segmented
    - having customer database in the same database
- single layer defense
    - a motivated person could get in if they want
    - multiple layers so you can slow them down

## 5: Security Misconfiguration
- exposing development information (debug information and stack traces)
    - the solution to this is to just return a number. Then you go into your logging system and look for that number in the loggin system.
- using default configurations
    - default usernames and passwords
- unnecessary features installed
    - clean up your computer
- system not hardened
    - cleaning stuff up
    - `npm audit` will look for vulnerabilities

## 6: Vulnerable components
- unnecessary or unused packages imported
- untrusted verified sources
    - at a company you ask to use a package and IT will check it and add to the internal package manager
- out of date software
    - don't just automatically update
- not tracking vulnerability bulletins
- package versions not locked

## 7: ID and Auth Failures
- credential stuffing (compromised list)
    - trying a bunch of passwords
- brute force attacks (guess a password)
- permitting weak passwords
- weak credential recovery
    - forget password....
- credentials in URL     
- not expiring auth tokens

## 8: Software Integrity Failures
- unverified CDN usage
- unverified packages
- unverified updates
- insecure CD/CI platforms

## 9: Logging failures
- not logging critical requests
- not monitoring...

## 10: Server Side Request Forgery
- Say the user gives you a url and returning the resource for it.
    - what if they give you a `localhost` thign.

On a page the only thing you can really only trust the domain name (not the paths though!)
- the forward and back buttons are controlled by the Browser Router
- the paths in the url are also changed by the Browser Router

White hat: someone who thinks like a black hat, but for protection.
- discover the system
- get behind the wall of trust
- use exposed info
- exploit unexpected usage
- exploit misdirection
- exploit lazy
- exploit trust

Security minded
- secure real time logging and metrics
- action playbooks
