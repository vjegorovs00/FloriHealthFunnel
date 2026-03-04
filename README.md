# Flori health funnel
Multi-step funnel application that collects user body metrics, calculates potential weight loss, and stores submission data in Supabase.

**Depoloyed webapp available via the link:**
~~[Link to Vercel](www.google.com)~~

## About the project
**Tech stack:** Next.js, Typescript, Tailwind CSS, Supabase(PostgreSQL), Vercel.

**Features:** 
- 7-step funnel flow, 
- Form validation,
- Support for metrics (cm/kg) and Imperial (ft/lb) systems,
- Persistent state between steps,
- Supabase data storage,
- Clean component structure,
- Responsive & pixel accurate UI implementation

**Funnel flow:**
1. Home (CTA)
2. Enter height
3. Enter weight
4. Enter dream weight
5. Info screen (weight difference)
6. Enter email
7. Checkout

## Setup and installation
Steps to set up the project **locally**:

1. clone the repository
```Bash
git clone <repo-url>
cd flori-health-funnel
```
2. Install dependencies
```Bash
npm install
```
3. Create `.env.local`
```Bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
4. Run development server
```Bash
npm run dev
```
5. Apps run at:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit handling
Internally, all values are converted to metric units before storing in the database
### Metric:
- Height in cm
- Weight in kg

### Imperial:
- Height in ft/in
- Weight in lb

## Database schema (Supabase)
Table: funnel_submission
Column | Type
 ------------ | ------------- 
id | uuid 
created_at | timestamp
height_cm | integer 
weight_kg | integer 
target_weight_kg | integer 
calculated_loss_kg | integer 
email | text 

Note: All values are stored in metric format for normalization
## License
MIT License

## Contacts
Email: v.jegorovs00@gmail.com